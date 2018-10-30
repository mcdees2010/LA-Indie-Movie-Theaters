import React from 'react';

const TheatreContainer = ({ theatre }) => {
    return (
        <ul>
            {theatre.map((theatres, i) => 
                <ul>
                    <li key={i}>{theatres.name}</li>
                    <img src={theatres.pic}/>
                </ul>
            )}
        </ul>
    )
}

export default TheatreContainer