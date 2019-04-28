import React, { Component } from 'react';
import Candy from './Candy';

export default class CandiesList extends Component {
  constructor() {
    super();
    this.state = {
      candies: [],
    };
  }
  componentDidMount() {
    this.setState({
      candies: [
        {
          name: 'm&m',
          description: 'chocolate',
          quantity: 12,
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71uBOlRzGgL._SL1000_.jpg',
        },
        {
          name: 'm&m',
          description: 'chocolate',
          quantity: 12,
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71uBOlRzGgL._SL1000_.jpg',
        },
      ],
    });
  }
  render() {
    return (
      <div id="candies-list">
        {this.state.candies.map(candy => (
          <Candy candy={candy} />
        ))}
      </div>
    );
  }
}
