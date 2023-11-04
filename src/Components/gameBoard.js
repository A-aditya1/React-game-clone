import React, { useState } from "react";
import GameCircle from "./gameCircle";
import "../Game.css";
import Header from "./header";
import Footer from "./footer";
import { isWinner } from "../helper";

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(1);

    console.log(gameBoard);

    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i))
        }
        return circles;
    }

    const circleClicked = (id) => {
        console.log("Circle are slected:" + id);

        // const board = [...gameBoard];
        // board[id] = currentPlayer;


        if (isWinner(gameBoard , id, currentPlayer)) {
            console.log("winner");
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
            <Header player={currentPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer />
        </>
    )
}

export default GameBoard