import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Board from './board/Board';

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div><Board/>
      <footer className="footer">Developed by: Ashley Hannigan</footer></div>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
