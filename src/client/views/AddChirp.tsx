import * as React from "react";
import { useState } from "react";
import * as moment from "moment";

const AddChirp: React.FC<IAddChirpProps> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const post = () => {
    let chirp = {
      username,
      message,
      time: moment().format("LLL"),
    };

    fetch("/api/chirps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="form-group w-50">
        <textarea
          className="form-control"
          id="chirpBody"
          placeholder="Enter Text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button onClick={post} className="btn btn-primary">
        Post
      </button>
    </div>
  );
};

interface IAddChirpProps {}

export default AddChirp;
