import React from 'react';
import {
  GAME_STATE_WIN,
  GAME_STATE_PLAYING,
} from "../constants";

const Header = ({ gameState, player }) => {
  const renderLable = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player { player } Turn</div>
      case GAME_STATE_WIN:
        return <div> Player { player } Wins</div>
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
