import React, { useState, useEffect } from "react";
import Row from "./Row";
import Reset from "../Reset";

const Board = () => {
  const [squares, setSquares] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (squares[index] !== "-" || winner || isDraw) return;

    const newSquares = squares.map((val, i) =>
      i === index ? currentPlayer : val
    );

    setSquares(newSquares);

    const winnerPlayer = checkWinner(newSquares);
    if (winnerPlayer) {
      setWinner(winnerPlayer);
    } else if (!newSquares.includes("-")) {
      setIsDraw(true);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const resetValue = () => {
    setSquares(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  const checkWinner = (newSquares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let [a, b, c] of lines) {
      if (
        newSquares[a] !== "-" &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        return newSquares[a]; // returns "X" or "O"
      }
    }

    return null;
  };

  const renderRow = (rowIndex) => {
    const start = rowIndex * 3;
    return (
      <>
        <Row
          key={rowIndex}
          values={squares.slice(start, start + 3)}
          onBoxClick={(colIndex) => handleClick(start + colIndex)}
        />
      </>
    );
  };

  useEffect(() => {
    console.log("Current player:", currentPlayer);
    console.log("Board:", squares);
  }, [squares, currentPlayer]);

  return (
    <div className="board">
      {winner && <h2>{winner} wins!</h2>}
      {isDraw && !winner && <h2>It’s a draw!</h2>}
      {!winner && !isDraw && <h3 className="turn">{currentPlayer}'s Turn</h3>}
      {renderRow(0)}
      {renderRow(1)}
      {renderRow(2)}

      <Reset resetValue={resetValue} />
    </div>
  );
};

export default Board;
