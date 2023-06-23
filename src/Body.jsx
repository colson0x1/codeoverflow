import React from 'react';

function Body({ comment }) {
  console.log(comment);

  return <p>{comment}</p>;
}

export default Body;
