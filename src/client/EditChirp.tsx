import * as React from "react";
import * as ReactComponentProps from "react-router-dom";

const EditChirp: React.SFC<IEditProps> = props => {
  const saveEdit = () => {
    history.back();
  };

  return (
    <div>
      <h1>Edit Chirp</h1>
      <div className="form-group">
        <input type="text" className="form-control" id="chirpAuthor"></input>
      </div>
      <div className="form-group">
        <textarea className="form-control" id="chirpBody"></textarea>
      </div>
      <button className="btn btn-success" onClick={saveEdit}>
        Update
      </button>
    </div>
  );
};

interface IEditProps {}

export default EditChirp;
