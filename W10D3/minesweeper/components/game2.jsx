import React, { useState } from "react";
import Board from './board';

import * as Minesweeper from '../minesweeper';


export default function Game() {
  const [board, setBoard] = useState(new Minesweeper.Board(9, 10))

  const restart = () => {
    setBoard(new Minesweeper.Board(9, 10))
  }

  const updateGame = (tile, flagged) => {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    setBoard(board)
  }

  let modal;
  if (board.lost() || board.won()) {
    const text = board.won() ? "You won!" : "You lost!";
    modal =
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{text}</p>
          <button onClick={restart}>Play Again</button>
        </div>
      </div>
  }


  return (
    <div>
      {modal}
      <Board board={board} updateGame={() => updateGame} />
    </div>
  );
}