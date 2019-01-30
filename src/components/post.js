import React from 'react';

const Post = (props) => {
  return (
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="card-img-top" src={props.image} />
          <div class="card-body">
            <p class="card-text">{props.caption}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
            </div>
          </div>
          </div>
      </div>
      );
}

export default Post;

