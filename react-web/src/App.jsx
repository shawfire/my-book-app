import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList'

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
                <BookList items={ books } />
             ) : (
                'Loading books...'
            )
        }
      </div>
    );
  }

  // Run after our component instance first appears on screen
  componentDidMount() {
    // Load projects from API
    fetch('/api/books')
      // Parsing the JSON into JavaScript objects
      .then(res => res.json())
      // Update our component’s state with the loaded projects
      .then(json => {
        // Changing the state will re-render the component
        this.setState({
          books: json
        })
      })
  }


}

export default App;