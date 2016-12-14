import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
          {this.props.children}
      </div>
    );
  }
}
