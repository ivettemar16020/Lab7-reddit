import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class CommentForm extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <input
          type="text"
          placeholder="text"
          ref={ node => { this.commentInput = node; } }
        />
        <button
          onClick={
            () => {
              onSubmit(
                this.commentInput.value,
              );

              this.commentInput.value = "";
              this.commentInput.focus();
            }
          }
        >
          Agregar comentario!
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(text) {
      dispatch(actions.addNewComment(uuid(), text));
    }
  })
)(CommentForm);