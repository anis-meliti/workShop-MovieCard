import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE
} from '../constants/actions-types';

export const addMovie = payload => ({
  type: ADD_MOVIE,
  payload
});

export const deleteMovie = payload => {
  console.log('TCL: payload', payload);

  return {
    type: DELETE_MOVIE,
    payload
  };
};

export const editMovie = payload => ({
  type: EDIT_MOVIE,
  payload
});
