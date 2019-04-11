import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import ListBooks from './ListBooks';

class FindBook extends Component {
  state = {
    searchQuery: '',
    booksFound: [],
    error: ''
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (searchQuery === '') {
      this.setState({ error: 'Input can not be empty.' });
      return;
    }

    const charCheck = searchQuery.match(/[^A-Za-z0-9 ]+/g);

    if (charCheck) {
      this.setState({ error: 'Input has invalid chars.' });
      return;
    }

    if (searchQuery.length < 6) {
      this.setState({ error: 'Input has to be longer that 6 chars.' });
      return;
    }

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyD03qRgi5d_EqFYwYfnJPdNGkDEnrsgoYM`
    );

    this.setState({
      searchQuery: '',
      error: '',
      booksFound: res.data
    });
  };

  render() {
    const { searchQuery, error, booksFound } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="searchQuery"
              className={classnames('form-control form-control-lg', {
                'is-invalid': error
              })}
              placeholder="Please enter book name..."
              value={searchQuery}
              onChange={this.onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>

          <input
            type="submit"
            value="Find It!"
            className="btn btn-light btn-block"
          />
        </form>
        {booksFound.length !== 0 ? <ListBooks booksArray={booksFound} /> : null}
      </div>
    );
  }
}

export default FindBook;
