import * as React from 'react';
import { useEffect, useState } from 'react';

const Main: React.SFC = props => {
    const [ chirps, setChirps ] = useState([]);

    const getChirps = () => {
        let arr = [];
        setChirps(arr);
    }
    return (
        <h1>Chirps Below</h1>
    );
}

export default Main;
