import React from 'react';

export default function Jumbotron() {
  return (
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">
          Title of a longer featured blog post
        </h1>
        <p className="lead mb-0">Continue reading...</p>
      </div>
    </div>
  );
}
