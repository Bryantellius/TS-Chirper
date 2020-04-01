import * as React from "react";

const EditChirp = () => {
  return (
    <div>
      <h1>Edit Chirp</h1>
      <div className="form-group">
        <input type="text" className="form-control" id="chirpAuthor"></input>
      </div>
      <div className="form-group">
        <textarea className="form-control" id="chirpBody"></textarea>
      </div>
      <button className="btn btn-success">Update</button>
    </div>
  );
};

export default EditChirp;
