import React from 'react';

import CommentForm from '../CommentForm';
import PostList from '../PostList';

const PostApp = () => (
  <div className="complete-post">
    <CommentForm />
    <PostList />
  </div>
);

export default PostApp;