import React from 'react';
import {
  GAME_STATE_WIN,
  GAME_STATE_PLAYING,
  GAME_STATE_DRAW,
} from "../constants";

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  const renderLable = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div style={{ color: "green" }}>Player {currentPlayer} Turn</div>
      case GAME_STATE_WIN:
        return <div style={{ color: "green" }}> Player {winPlayer} Wins</div>
      case GAME_STATE_DRAW:
        return <div style={{ color: "red" }}> Game is Draw!</div>
      default:
    }
  }
  return (
    <div className="panel header">
      <div className="header-text">{renderLable()}</div>
    </div>
  );
}

export default Header
