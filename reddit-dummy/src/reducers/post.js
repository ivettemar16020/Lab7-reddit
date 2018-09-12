/*Reducers: 
    byIdPost
    orderPost 
*/

import { combineReducers } from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.COMMENT_ADDED: {
      const { id } = action.payload;

      const newPost = {
        id: action.payload.id,
        text: action.payload.text,
        upvotes: 0,
        downvotes: 0,
        comments_ids: [],
      }

      return {
        ...state,
        [id]: newPost, 
      };
    }
    default: return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.COMMENT_ADDED: {
      const { id } = action.payload;
      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const posts = combineReducers({
  byId,
  order,
});

export default posts;


//hacer un par de selectores
export const getPostbyId = (state, id) => state.byId[id];
export const getPosts = (state) => state.order.map(
  id => getPostbyId(state, id),
);