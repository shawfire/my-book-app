import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    books: null
  }

  render() {
    //const books = this.state.books
    const { books } = this.state

    return (
      <div className="App">
        {
          // !null = true
          // !!null = false (waiting for data to load)
          // ![] = false
          // !![] = true (data loaded)
          !!books ? (
            books.length
          ) : (
            'Loading books...'
          )
        }
      </div>
    );
  }

  // Run after our component instance first appears on screen
  componentDidMount() {
    // Load books from API - via proxy set in package.json
    // 'http://localhost:7000/api/books'
    // 'http://localhost:3000/api/books'
    fetch('/api/books')
      .then(res => res.json)
      .then(json => {
        this.setState({
          books: json
        })
      })
  }
}

export default App;
