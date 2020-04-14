import React from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

const samplequote = {
  "quote":"I believe the children are the future... Unless we stop them now!",
  "character":"Homer Simpson",
  "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection":"Right"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneQuote: samplequote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          oneQuote: data[0],
        });
    });
  }

  render () {
    return (
      <div className="App">
        <DisplayQuote oneQuote={this.state.oneQuote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    )
  }

}

export default App;
