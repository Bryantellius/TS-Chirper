import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as moment from "moment";

const EditChirp: React.FC<IEditProps> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getChirp = async () => {
      let res = await fetch(`/api/chirps/${props.match.params.key}`);
      let chirp = await res.json();
      setUsername(chirp.username);
      setMessage(chirp.message);
    };
    getChirp();
  }, [props.match.params.key]);

  const saveEdit = async () => {
    let editedChirp = {
      username,
      message,
      time: moment().format("LLL"),
    };

    await fetch(`/api/chirps/${props.match.params.key}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedChirp),
    });
    history.back();
  };

  const deleteChirp = async () => {
    await fetch(`/api/chirps/${props.match.params.key}`, {
      method: "DELETE",
    });
    history.back();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Edit Chirp</h1>
      <div className="form-group w-50">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          id="editAuthor"
        ></input>
      </div>
      <div className="form-group w-50">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          id="editBody"
        ></textarea>
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

interface IEditProps extends RouteComponentProps<{ key: string }> {}

export default EditChirp;
