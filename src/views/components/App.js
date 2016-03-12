import React, { PropTypes } from 'react';

import CommentBox from '../containers/CommentBox';
import AddComment from '../containers/AddComment';

const App = ({ header, footer }) => (
  <div>
    {header}
    <AddComment/>
    <CommentBox/>
    {footer}
  </div>
);

App.displayName = 'App';
App.propTypes = {
  footer: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired
};

export default App;
