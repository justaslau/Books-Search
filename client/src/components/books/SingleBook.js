import React, { Component } from 'react';
import axios from 'axios';
class SingleBook extends Component {
  state = {
    hovered: false,
    saved: false,
    error: false
  };

  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });

  saveBook = (book, state) => {
    if (!state.saved) {
      const bookToSave = {
        bookId: book.id,
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        desc: book.volumeInfo.description,
        authors: book.volumeInfo.authors,
        link: book.volumeInfo.infoLink
      };

      axios
        .post('/api/books', bookToSave)
        .then(res =>
          res.data.status === 'completed'
            ? this.setState({ saved: true })
            : this.setState({ error: true })
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    const { singleBook } = this.props;
    return (
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-1">
            <div className="card-body d-flex flex-column align-items-start">
              <strong
                onMouseOver={this.setHover}
                onMouseOut={this.cancelHover}
                onClick={this.saveBook.bind(this, singleBook, this.state)}
                className="d-inline-block mb-2 p-1 text-primary"
              >
                <i
                  className={
                    this.state.hovered || this.state.saved
                      ? 'fas fa-heart'
                      : 'far fa-heart'
                  }
                />{' '}
                {!this.state.error
                  ? 'Save This Book'
                  : 'You saved this book before.'}
              </strong>
              <h5 className="mb-0">
                <a className="text-dark" href="/">
                  {singleBook.volumeInfo.title}
                </a>
              </h5>
              <p className="card-text mb-auto text-justify mt-2">
                {singleBook.volumeInfo.description
                  ? singleBook.volumeInfo.description.substring(0, 250) + '...'
                  : singleBook.volumeInfo.description}
              </p>
              <p className="card-text mb-auto text-justify mt-2">
                <strong>
                  <i className="fas fa-user-friends" />{' '}
                  {singleBook.volumeInfo.authors
                    ? singleBook.volumeInfo.authors.map(author => `${author} `)
                    : null}
                </strong>
              </p>
            </div>
            <img
              className="card-img-right flex-auto d-none d-md-block"
              src={
                singleBook.volumeInfo.imageLinks
                  ? singleBook.volumeInfo.imageLinks.thumbnail
                  : null
              }
              alt={singleBook.volumeInfo.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBook;
