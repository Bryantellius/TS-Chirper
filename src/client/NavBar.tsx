import * as React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.SFC = props => {
  return (
    <div className="d-flex justify-content-between p-2 bg-success">
      <h3>Chirper</h3>
      <div className="d-flex justify-content-around align-items-center w-25">
        <NavLink className="nav-link text-dark" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link text-dark" to="/add">
          Add Chirp
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;