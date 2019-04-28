import React from 'react';

const Candy = props => {
  const candy = props.candy;
  return (
    <div>
      <h3>{candy.name}</h3>
      <p>Quantity: {candy.quantity}</p>
      <p>{candy.description}</p>
      <img src={candy.imageUrl} />
    </div>
  );
};

export default Candy;
