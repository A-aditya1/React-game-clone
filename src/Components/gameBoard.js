import React, { useState } from "react";
import GameCircle from "./gameCircle";
import "../Game.css";
import Header from "./header";
import Footer from "./footer";
import { isWinner } from "../helper";
import { GAME_STATE_WIN, 
    GAME_STATE_PLAYING, 
    NO_PLAYER, 
    PLAYER_1, 
    NO_CIRCLES,
    PLAYER_2 } from "../constants";

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);

    console.log(gameBoard);

    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const circleClicked = (id) => {
        console.log("Circle are slected:" + id);
        if (isWinner(gameBoard, id, currentPlayer)) {
            // console.log("winner");
            setGameState(GAME_STATE_WIN);
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
        console.log(currentPlayer);
    }
    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    return (
        <>
            <Header gameState={gameState} player={currentPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer />
        </>
    )
}

export default GameBoard