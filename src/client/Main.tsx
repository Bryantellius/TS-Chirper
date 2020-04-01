import $ from "jquery";
import * as React from "react";
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

  const timeline = chirps.map(chirp => {
    if (chirp) {
      let key = `${chirp.username}${Math.floor(Math.random() * 10)}`;
      console.log(key);
      return (
        <div key={key} className="card">
          <div className="card-body">
            <div className="card-title">
              <h3>{chirp.username}</h3>
            </div>
            <div className="card-text">
              <p>{chirp.message}</p>
            </div>
            <div className="card-footer">
                <NavLink to={`/${chirp.username}/admin`} className="nav-link text-dark">Admin Options</NavLink>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <section id="chirpsDiv">
      <h1>Above Chirps</h1>
      <>{timeline}</>
      <h1>Below Chirps</h1>
    </section>
  );
};

export default Main;
