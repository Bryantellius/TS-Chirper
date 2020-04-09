import * as React from "react";
import { NavLink } from "react-router-dom";
import type { IChirp } from "../utils/types";

const ChirpCard: React.FC<IChirpCardProps> = ({ chirp }) => {
  return (
    <div id={chirp.id} className="card my-2">
      <div className="card-body">
        <div className="card-title">
          <h4>{chirp.username}</h4>
        </div>
        <div className="card-text">
          <p>{chirp.message}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span id="date">{chirp.time}</span>
          <NavLink
            to={`/${chirp.id}/admin`}
            className="nav-link btn btn-sm btn-outline-info rounded text-dark"
          >
            Admin Options
          </NavLink>
        </div>
      </div>
    </div>
  );
};

interface IChirpCardProps {
  chirp: IChirp;
}

export default ChirpCard;
