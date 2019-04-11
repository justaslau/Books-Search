import React, { Component } from 'react';

class SingleBook extends Component {
  render() {
    const { singleBook } = this.props;
    return (
      <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-1">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">
                {singleBook.volumeInfo.categories
                  ? singleBook.volumeInfo.categories[0]
                  : null}
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
                  <i class="fas fa-user-friends" />{' '}
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
