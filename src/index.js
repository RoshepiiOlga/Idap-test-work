import React, { Component } from 'react';
import { render } from 'react-dom';
import LeftContent from "./components/leftContent";

import './stylesheet/style.css';


render(
  <LeftContent />,
  document.getElementById('left-content')
);
