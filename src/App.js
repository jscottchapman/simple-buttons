import React, { Component } from 'react';
import logo from './logo.svg';
import gifts from './gifts';

class GiftList extends Component {
  handleClick(link) {
    alert(link);
    
  }
  render() {
    const giftList = gifts.map(gift => (
      <div>
        <h1>{gift.person}</h1>
        <button onClick={() => this.handleClick(gift.giftlink)} />
      </div>
  ))
    return giftList;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Gifts with buttons</h1>
        </header>
        <GiftList />
      </div>
    );
  }
}

export default App;
