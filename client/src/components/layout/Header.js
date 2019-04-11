import React from 'react';

export default function Header() {
  return (
    <div>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <i className="fab fa-github-square mr-1" />
            <i className="fab fa-linkedin" />
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="/">
              Google Books API
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="btn btn-sm bg-success mr-2" href="/">
              <i className="fas fa-heart" /> Saved Books
            </a>
            <a className="btn btn-sm bg-danger" href="/">
              <i className="fas fa-search" /> Search
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
