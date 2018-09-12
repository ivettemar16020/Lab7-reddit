/*
    byIdComment
*/

import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.COMMENT_ADDED: {
      const { id } = action.payload;

      const newComment = {
        id: action.payload.id,
        text: action.payload.text,
      }

      return {
        ...state,
        [id]: newComment, 
      };
    }
    default: return state;
  }
};

export default byId;