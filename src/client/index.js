import React from 'react';
import { hydrate } from 'react-dom';
import Landing from '../App.js';

window.onload = () => {
  hydrate(
    <Landing />,
    document.getElementById("root")
  );
};
