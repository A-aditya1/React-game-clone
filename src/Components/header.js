import React from 'react';
import {
  GAME_STATE_WIN,
  GAME_STATE_PLAYING,
  GAME_STATE_DRAW,
} from "../constants";
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsIcon from '@mui/icons-material/Sports';

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  const renderLable = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div style={{ color: "green",display:"flex", justifyContent:"center",alignItems:'center' }}>Player {currentPlayer} Turn</div>
      case GAME_STATE_WIN:
        return <div style={{ color: "green",display:"flex", justifyContent:"center",alignItems:'center' }}> Player {winPlayer} Wins <CelebrationIcon/></div>
      case GAME_STATE_DRAW:
        return <div style={{ color: "red" ,display:"flex", justifyContent:"center",alignItems:'center'}}> Game is Draw! <SportsIcon/></div>
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
