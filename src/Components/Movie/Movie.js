import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
  Col,
  Button,
  CardFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Movie.css';

import Rate from '../SearchBar/Rate';
import ModalComp from '../Modal/Modal';
import { deleteMovie } from '../../js/actions/index';

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id))
});
class Movie extends React.Component {
  state = {
    isShow: false
  };
  toggle = () => this.setState({ isShow: !this.state.isShow });

  render() {
    const { id, title, firas, rating, year } = this.props.movie;
    return (
      <>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Link to={`/detail/${id}`}>
              <CardTitle>
                <h6 className='title'>{title}</h6>
              </CardTitle>
            </Link>

            <CardImg src={firas} className='card-image' />
            <CardBody>
              <CardText>
                <Rate rating={rating} isClickeble={false} />
                {year}
              </CardText>
            </CardBody>
            <CardFooter>
              <Button
                className='btn-round ml-5'
                color='danger'
                outline
                onClick={() => this.props.deleteMovie(id)}
              >
                Delete
              </Button>
              <Button
                className='btn-round ml-5'
                color='info'
                outline
                onClick={() => this.toggle()}
              >
                Edit
              </Button>
            </CardFooter>
          </Card>
        </Col>
        {this.state.isShow ? (
          <ModalComp
            movie={this.props.movie}
            isOpen={this.state.isShow}
            toggle={this.toggle}
            isEdit={true}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(Movie);
