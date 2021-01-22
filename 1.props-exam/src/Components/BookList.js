import React, { Component } from 'react';

import { List, ListItem, Container } from '@material-ui/core';

import BookListItem from './BookListItem';


class BookList extends Component {
    render() {

        const { books } = this.props;
        const bookItems = books.map(book => { // 하나의 book 객체가 나오게 되면 이것을 가지고 반복문을 리턴
            return (
                <ListItem key={book.ISBN}>
                    <BookListItem book={book} /> { /*book 이라는 이름으로 prop를 전달해줌 -> BookListItem은 ListItem의 배열을 갖게된다 */}
                </ListItem>
            )
        })
        return (
            <Container maxWidth="sm">
                <List>
                    {bookItems}
                </List>
            </Container>
        )
    }
}

export default BookList;