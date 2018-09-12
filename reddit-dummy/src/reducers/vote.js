/*
    update upvote
    update downvote

    const votes = combineReducers({
        upvote,
        downvote,
    });
*/


const vote = (state = {}, action) => {
    switch (action.type) {
      case types.DOWNVOTE_UPDATED: {
        const { karma } = action.payload;
       
  
        return {
          ...state,
          karma: karma - 1,
        };
      }

      case types.UPVOTE_UPDATED: {
        const { karma } = action.payload;
       
  
        return {
          ...state,
          karma: karma + 1,
        };
      }

      default: return state;
    }
}