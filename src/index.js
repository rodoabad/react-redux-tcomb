import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/CommentBox';

const data = [
  {
    id: 1,
    author: 'Pete Hunt',
    text: 'This is one comment'
  },
  {
    id: 2,
    author: 'Jordan Walke',
    text: 'This is *another* comment'
  },
  {
    id: 3,
    author: 'Rodo Abad',
    text: 'Extra comment'
  }
];

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
