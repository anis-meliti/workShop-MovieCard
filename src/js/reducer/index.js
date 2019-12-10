import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE
} from '../constants/actions-types';

const initialState = {
  movies: [
    {
      id: 1050,
      title: 'V for Vandetta',
      firas:
        'http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/lSA7mAHolAw'
    },
    {
      id: 1205,
      title: 'The Detachement',
      firas:
        'https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/w7lBleOF9Pw'
    },
    {
      id: 20265,
      title: 'The experiment',
      firas: 'https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/JlUkzfITiSs'
    },
    {
      id: 336598,
      title: 'Inception',
      firas:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0&t'
    }
  ],
  loading: true
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload]
        // movies: [...state.movies, {...payload,id:Date.now()}]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== Number(payload))
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === Number(payload.id)
            ? (el = payload)
            : // ? {

              //     title: payload.title,
              //     firas: payload.firas,
              //     year: payload.year,
              //     rating: payload.rating
              //   }
              el
        )
      };

    default:
      return state;
  }
};
export default rootReducer;
