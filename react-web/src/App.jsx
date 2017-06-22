import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList'
// import BookFormContainer from './components/BookFormContainer'
import CreateBookForm from './components/CreateBookForm'

class App extends Component {
  state = {
    error: null,
    books: null
  }

  handleCreateBook = ({ title }) => {
    fetch('/api/books', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title })
    }) 
    .then(res => res.json())
    .then(newBook => {
        this.setState((prevState) => {
          // Update local state with new book added to end
          return {
            books: prevState.books.concat(newBook)
          }
        })
      })
      .catch(error => {
        this.setState({ error })
      })   
  }

  render() {
    //const books = this.state.books
    const { error, books } = this.state

    return (
      <div className="App">
        {/*<BookFormContainer />*/}
        <div>
            { !!error && <p>{ error.message }</p> }
            <CreateBookForm onCreate={ this.handleCreateBook } />
            { 
              !!books ? (
                <BookList items={ books } />
              ) : (
                'Loading books...'
            )
            }
        </div>
      </div>
    )
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
      .catch(error => {
        this.setState({ error })
      })
  }

}

export default App;