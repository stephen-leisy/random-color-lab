import { array } from 'prop-types';
import React, { Component } from 'react';
import ChangeSquare from '../presentation/ChangeSquare';

const colorArray = [
  '#f72585',
  '#b5179e',
  '#7209b7',
  '#560bad',
  '#480ca8',
  '#3a0ca3',
  '#3f37c9',
  '#4361ee',
  '#4895ef',
  '#4cc9f0',
];
const meme = `https://i.kym-cdn.com/photos/images/facebook/001/486/224/509.jpg`;

export default class RandomColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f72585',
      meme: '',
    };
    this.chaChaChanges();
  }

  getRandom = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  chaChaChanges = () => {
    setInterval(() => {
      let random = this.getRandom();

      if (random !== this.state.color) {
        this.setState({ color: random, meme: '' });
      } else
        this.setState({
          color: '',
          meme,
        });

      newArray.push(random);
    }, 1000);
  };
  render() {
    return <ChangeSquare color={this.state.color} meme={this.state.meme} />;
  }
}
