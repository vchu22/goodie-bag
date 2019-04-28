import React from 'react';
import CandiesList from './CandiesList';
import { connect } from 'react-redux';
import store from '../store';

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandiesList />
      </main>
    </div>
  );
};

export default Root;
