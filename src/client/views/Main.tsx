import * as React from "react";
import { useEffect, useState } from "react";
import type { IChirp } from "../utils/types";
import ChirpCard from "../components/ChirpCard";

const Main: React.FC<IMainProps> = (props) => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  const getChirps = async () => {
    let res = await fetch(`/api/chirps`);
    let chirps = await res.json();
    setChirps(chirps);
  };

  useEffect(() => {
    getChirps();
  }, []);

  return (
    <section id="chirpsDiv" className="d-flex flex-column align-items-center">
      <h6 className="alert alert-info w-50 my-1 text-center">Timeline</h6>
      <div className="w-50">
        {chirps.map((chirp) => (
          <ChirpCard
            key={`chirp-body-${chirp.id}-${chirp.username}`}
            chirp={chirp}
          />
        ))}
      </div>
      <a
        href="#topNav"
        className="nav-link alert alert-info w-50 my-1 text-center"
      >
        To Top
      </a>
    </section>
  );
};

interface IMainProps {}

export default Main;
