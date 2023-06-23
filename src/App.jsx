import React from 'react';

import { comments } from './commentData';
import Card from './Card';

function App() {
  return comments.map((comment) => {
    return <Card commentObject={comment} />;
  });
}

export default App;
