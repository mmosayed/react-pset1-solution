import React from 'react';

const Jumbotron = (props) => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">{props.username}</h1>
        <p className="lead text-muted">{props.bio}</p>
      </div>
    </section>
  )
}

export default Jumbotron;