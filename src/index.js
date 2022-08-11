import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board';
import { start } from './Utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board orientation={0} position={start()} width={600} />
  </React.StrictMode>
);
