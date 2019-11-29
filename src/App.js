import React from "react";
import { Container, Row } from "reactstrap";

import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import AddNewMovie from "./Components/AddNewMovie/AddNewMovie";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        title: "V for Vandetta",
        firas:
          "http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2",
        rating: 5
      },
      {
        title: "The Detachement",
        firas:
          "https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg",
        rating: 4
      },
      {
        title: "The experiment",
        firas:
          "https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg",
        rating: 5
      },
      {
        title: "Inception",
        firas:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        rating: 4
      }
    ],
    searchInput: "",
    searchRate: 0
  };
  addNewMovie = newMovie =>
    this.setState({ ...this.state, movies: [...this.state.movies, newMovie] });

  changeSearchHandler = e => this.setState({ searchInput: e.target.value });
  rateSearchHandler = rate => this.setState({ searchRate: rate });
  render() {
    return (
      <Container>
        <Row>
          <SearchBar
            changeHandler={this.changeSearchHandler}
            rate={this.state.searchRate}
            rateChange={this.rateSearchHandler}
          />
        </Row>
        <Row>
          <MovieList
            movies={
              this.state.searchInput
                ? this.state.movies.filter(el =>
                    el.title
                      .toLowerCase()
                      .includes(this.state.searchInput.toLowerCase())
                  )
                : this.state.movies.filter(
                    el => el.rating >= this.state.searchRate
                  )
            }
          />
        </Row>
        <Row>
          <AddNewMovie addNewMovie={this.addNewMovie} />
        </Row>
      </Container>
    );
  }
}

export default App;
