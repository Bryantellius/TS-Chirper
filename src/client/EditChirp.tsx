import * as React from "react";
import $ from "jquery";

const EditChirp: React.SFC<IEditProps> = props => {
  const saveEdit = () => {
    let editedChirp = {
      username: $("#editAuthor").val(),
      message: $("#editBody").val()
    };
    $.ajax({
      method: "PUT",
      url: `http://localhost:3000/api/chirps/5`,
      contentType: "application/json",
      data: JSON.stringify(editedChirp)
    }).done(res => {
      console.log(res);
    });
    history.back();
  };

  const deleteChirp = () => {
    $.ajax({
      method: "DELETE",
      url: `http://localhost:3000/api/chirps/5`
    }).done(res => console.log(res));
    history.back();
  };

  return (
    <div>
      <h1>Edit Chirp</h1>
      <div className="form-group">
        <input type="text" className="form-control" id="editAuthor"></input>
      </div>
      <div className="form-group">
        <textarea className="form-control" id="editBody"></textarea>
      </div>
      <div className="editBtns d-flex justify-content-between">
        <button className="btn btn-success" onClick={saveEdit}>
          Update
        </button>
        <button className="btn btn-danger" onClick={deleteChirp}>
          Delete
        </button>
      </div>
    </div>
  );
};

interface IEditProps {}

export default EditChirp;
