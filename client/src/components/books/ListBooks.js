import React, { Component } from 'react';
import SingleBook from './SingleBook';

class ListBooks extends Component {
  render() {
    const { booksArray } = this.props;
    return (
      <div>
        <h2>We found these books for you</h2>
        {booksArray.items > 0
          ? booksArray.items.map(book => (
              <SingleBook key={book.id} singleBook={book} />
            ))
          : console.log('nera')}
      </div>
    );
  }
}

export default ListBooks;
