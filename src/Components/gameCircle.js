import React from 'react';
import '../Game.css';

const GameCircle = ({ onCircleClicked, id,className, children }) => { 
    return (
        /* onClick={() => onClick(id)} This is a Javascript function */
        <div className={`gameCircle ${className}`}  onClick={() => onCircleClicked(id)}>
            {children}
        </div>
    )
}

export default GameCircle
