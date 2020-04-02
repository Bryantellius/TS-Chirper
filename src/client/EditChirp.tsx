import * as React from "react";
import $ from "jquery";
import { RouteComponentProps } from "react-router-dom";

const EditChirp: React.SFC<IEditProps> = props => {
  let data = props.match.params;
  let id = Object.keys(data).map(key => data[key]);

  $.ajax({
    method: "GET",
    url: `http://localhost:3000/api/chirps/${id[0]}`
  }).done(data => {
    $("#editAuthor").val(data.username);
    $("#editBody").val(data.message);
  });

  const saveEdit = () => {
    let editedChirp = {
      username: $("#editAuthor").val(),
      message: $("#editBody").val()
    };
    $.ajax({
      method: "PUT",
      url: `http://localhost:3000/api/chirps/${id[0]}`,
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
      url: `http://localhost:3000/api/chirps/${id[0]}`
    }).done(res => console.log(res));
    history.back();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Edit Chirp</h1>
      <div className="form-group w-50">
        <input type="text" className="form-control" id="editAuthor"></input>
      </div>
      <div className="form-group w-50">
        <textarea className="form-control" id="editBody"></textarea>
      </div>
      <div className="d-flex w-25 flex-row justify-content-between">
        <button className="btn btn-primary" onClick={saveEdit}>
          Update
        </button>
        <button className="btn btn-danger" onClick={deleteChirp}>
          Delete
        </button>
      </div>
    </div>
  );
};

interface IEditProps extends RouteComponentProps {}

export default EditChirp;
