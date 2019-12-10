import React, { Component } from 'react';
import { Modal, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { addMovie, editMovie } from '../../js/actions/index';

const mapDispatchToProps = dispatc => ({
  addMovie: x => dispatc(addMovie(x)),
  editMovie: editedMovie => dispatc(editMovie(editedMovie))
});
class ModalComp extends Component {
  state = {
    id: this.props.isEdit ? this.props.movie.id : '',
    title: this.props.isEdit ? this.props.movie.title : '',
    firas: this.props.isEdit ? this.props.movie.firas : '',
    rating: this.props.isEdit ? this.props.movie.rating : ''
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () =>
    this.props.isEdit
      ? this.props.editMovie(this.state)
      : this.props.addMovie({
          ...this.state,
          id: Date.now()
        });
  render() {
    // const { id, title } = this.props.movie;
    console.log(this.props.isEdit);
    const { isOpen, toggle, isEdit } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={() => toggle()}>
        <div className='modal-header'>
          <h5 className='modal-title' id='exampleModalPopoversLabel'>
            {isEdit ? 'Edit Movie...' : 'Add Movie...'}
          </h5>
          <button
            aria-label='Close'
            className='close'
            data-dismiss='modal'
            type='button'
            onClick={() => toggle()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className='modal-body'>
          <Input
            type='text'
            name='title'
            defaultValue={this.state.title}
            placeholder='Enter a movie name...'
            onChange={this.changeHandler}
          />
          <Input
            type='text'
            name='firas'
            defaultValue={this.state.firas}
            placeholder='Enter a movie poster...'
            onChange={this.changeHandler}
          />
          <Input
            type='text'
            name='rating'
            defaultValue={this.state.rating}
            placeholder='Enter a movie rate...'
            onChange={this.changeHandler}
          />
        </div>
        <div className='modal-footer'>
          <div>
            <Button
              className='btn-link'
              color='default'
              onClick={() => {
                toggle();
                this.handleClick();
              }}
              type='button'
            >
              {isEdit ? 'Save Movie' : 'Add Movie'}
            </Button>
          </div>
          <div className='divider' />
          <div className='right-side'>
            <Button className='btn-link' color='danger' type='button'>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}
export default connect(null, mapDispatchToProps)(ModalComp);
