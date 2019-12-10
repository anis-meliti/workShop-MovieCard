import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import MovieList from './Components/MovieList/MovieList';
import AddNewMovie from './Components/AddNewMovie/AddNewMovie';
import SearchBar from './Components/SearchBar/SearchBar';
import Details from './Components/Details/Details';

const mapStateToProps = state => ({
  moviesList: state.movies
});

class App extends React.Component {
  state = {
    searchInput: '',
    searchRate: 0
  };
  // addNewMovie = newMovie =>
  //   this.setState({ ...this.state, movies: [...this.state.movies, newMovie] });

  changeSearchHandler = e => this.setState({ searchInput: e.target.value });
  rateSearchHandler = rate => this.setState({ searchRate: rate });
  render() {
    const { moviesList } = this.props;

    return (
      <Container>
        <BrowserRouter>
          <Row>
            <SearchBar
              changeHandler={this.changeSearchHandler}
              rate={this.state.searchRate}
              rateChange={this.rateSearchHandler}
            />
          </Row>
          <Row>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <MovieList
                    movies={
                      this.state.searchInput
                        ? moviesList.filter(el =>
                            el.title
                              .toLowerCase()
                              .includes(this.state.searchInput.toLowerCase())
                          )
                        : moviesList.filter(
                            el => el.rating >= this.state.searchRate
                          )
                    }
                  />
                )}
              />
              <Route exact path='/detail/:movie' component={Details} />
            </Switch>
          </Row>
          <Row>
            <AddNewMovie />
          </Row>
        </BrowserRouter>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(App);
