import * as React from "react";
import $ from "jquery";
import * as moment from "moment";

const AddChirp: React.SFC = props => {
  const post = () => {
    let chirp = {
      username: $("#chirpAuthor").val(),
      message: $("#chirpBody").val(),
      time: moment().format("LLL")
    };
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/api/chirps",
      contentType: "application/json",
      data: JSON.stringify(chirp)
    }).done(res => {
      console.log(res);
    });
    history.back();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Add Chirp</h1>
      <div className="form-group w-50">
        <input
          type="text"
          className="form-control"
          id="chirpAuthor"
          placeholder="Name"
        ></input>
      </div>
      <div className="form-group w-50">
        <textarea
          className="form-control"
          id="chirpBody"
          placeholder="Enter Text"
        ></textarea>
      </div>
      <button onClick={post} className="btn btn-primary">
        Post
      </button>
    </div>
  );
};

export default AddChirp;
