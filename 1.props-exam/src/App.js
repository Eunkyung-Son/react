import React, { Component } from 'react';
import BookList from './Components/BookList';

import Books from './static_data/Books';

class App extends Component {
  render() {
    return (
      <BookList books={Books} /> // static data인 books를 props로 받는다.
    )
  }
}

export default App;
