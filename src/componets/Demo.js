import React from 'react';
import { useState } from 'react';
import {sculptureList} from '../data';

const Demo = () => {

    const [index, setIndex] = useState(0);

    function handleClickNext() {
        if(index + 1 !== sculptureList.length) {
            setIndex(index + 1);
        } else {
            alert('You are at the last page and can go no further');
        }
    }

    function handleClickPrevious() {
        if(index !== 0) {
            setIndex(index - 1);
        } else {
            alert('You are on the first page and cannot go back any further');
        }
    }

    function handleClickReset() {
        setIndex(0);
    }

    let sculpt = sculptureList[index];

    return (
        <div>
            <button onClick={handleClickPrevious}>Previous</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickNext}>Next</button>

            <h2>
                <i>{sculpt.name}</i>
                by <i>{sculpt.artist}</i>
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <img src={sculpt.url} alt={sculpt.alt} />

            <p>{sculpt.description}</p>

        </div>
    );
}

export default Demo;
