import React from 'react';

import CommentBox from '../containers/CommentBox';
import AddComment from '../containers/AddComment';

const App = () => (
  <div>
    <AddComment/>
    <CommentBox/>
  </div>
);

App.displayName = 'App';

export default App;
