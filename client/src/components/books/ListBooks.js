import React, { Component } from 'react';
import SingleBook from './SingleBook';

class ListBooks extends Component {
  render() {
    const { booksArray } = this.props;
    return (
      <div>
        {booksArray.items
          ? booksArray.items.map(book => (
              <SingleBook key={book.id} singleBook={book} />
            ))
          : console.log('nera')}
      </div>
    );
  }
}

export default ListBooks;
