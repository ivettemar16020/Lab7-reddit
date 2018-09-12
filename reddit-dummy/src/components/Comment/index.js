import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Comment = ({
  text,
}) => (
  <div>
    <ul>{text}</ul>
  </div>
);

export default connect(
  (state, { id })=>({
    ...state.byId[id],
  }),
  undefined,
)(Comment);