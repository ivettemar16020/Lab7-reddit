import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers/post';
import Comment from '../Comment';

const PostList = ({ posts = [] }) => (
  <Fragment>
    <ul>
      {
        posts.length > 0
        ? posts.map(({ id }) => <Comment key={id} id={id} />)
        : <a>No se han encontrado posts</a>
      }
    </ul>
  </Fragment>
);

export default connect(
  state => ({
    posts: selectors.getPosts(state),
  }),
  undefined,
)(PostList);
