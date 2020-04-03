import * as React from "react";
import $ from "jquery";
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
        if (key === "nextid") {
          return null;
        }
        return (
          <div
            key={`${data[key].username}${key}`}
            id={key}
            className="card my-2"
          >
            <div className="card-body">
              <div className="card-title">
                <h4>{data[key].username}</h4>
              </div>
              <div className="card-text">
                <p>{data[key].message}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <span id="date">{data[key].time}</span>
                <NavLink
                  to={`/${key}/admin`}
                  className="nav-link btn btn-sm btn-outline-info rounded text-dark"
                >
                  Admin Options
                </NavLink>
              </div>
            </div>
          </div>
        );
      });
      setChirps(arr.reverse());
    });
  };
  useEffect(() => {
    getChirps();
  }, []);

  return (
    <section id="chirpsDiv" className="d-flex flex-column align-items-center">
      <h6 className="alert alert-info w-50 my-1 text-center">Timeline</h6>
      <div className="w-50">{chirps}</div>
      <a href="#topNav" className="nav-link alert alert-info w-50 my-1 text-center">To Top</a>
    </section>
  );
};

export default Main;
