import $ from "jquery";
import * as React from "react";
import * as Moment from "moment";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Main: React.SFC = props => {
  const [chirps, setChirps] = useState([]);

  const getChirps = () => {
    let arr: Array<any> = [];
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/api/chirps"
    }).done(data => {
      arr = Object.keys(data).map(key => {
        if (key === `nextid`) {
        } else {
          return data[key];
        }
      });
      setChirps(arr);
    });
  };

  useEffect(() => {
    getChirps();
  }, []);

  const timeline = chirps.reverse().map(chirp => {
    if (chirp) {
      let key = `${chirp.username}${Math.floor(Math.random() * 10)}`;
      return (
        <div key={key} className="card my-2">
          <div className="card-body">
            <div className="card-title">
              <h3>{chirp.username}</h3>
            </div>
            <div className="card-text">
              <p>{chirp.message}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <span id="date">{Moment().format()}</span>
              <NavLink
                to={`/${chirp.username}/admin`}
                className="nav-link btn btn-sm btn-outline-info rounded text-dark"
              >
                Admin Options
              </NavLink>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <section id="chirpsDiv" className="d-flex flex-column align-items-center">
      <h6 className="alert alert-info w-50 my-1 text-center">Timeline</h6>
      <div className="w-50">{timeline}</div>
      <h6 className="alert alert-info w-50 my-1 text-center">Below Chirps</h6>
    </section>
  );
};

export default Main;
