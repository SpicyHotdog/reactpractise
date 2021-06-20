import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import ControlPannel from './Counter/ControlPannel';
import ControlPannel_Flux from './ControlPanel/ControlPanel_Flux';
import ControlPanelPractise from './ControlPanel/ControlPannelPractise.js'

ReactDOM.render(  
  <React.StrictMode>
    <ControlPanelPractise />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
