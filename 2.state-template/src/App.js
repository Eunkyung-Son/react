import React, { Component } from 'react';

import { Container, Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import Books from './static_data/Books';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: Books,
      selectedBook: Books[0],
    }
  }

  onSearchTitle(title) {
    let updateList = Books;
    updateList = updateList.filter(book => {
      console.log(book.title.toLowerCase().search(title.toLowerCase()) !== -1)
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });

    this.setState({
      books: updateList,

    })
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook: book,
    });
  }

  render() {
    return (
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)} /> { /* onSearchTitle method를 SearchBar의 props로 전달함 */}
        <Grid container spacing={2}>
          <Grid item>
            <BookList onSelectedBook={this.onSelectedBook.bind(this)} books={this.state.books} /> {/* 원래 books 였는데 state를 추가하면서 this.state.books로 바뀜 */}
          </Grid>

          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>

        </Grid>
      </Container>
    )
  }
}

export default App;