import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Vis from './Vis';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { VictoryBar, VictoryChart } from 'victory';

//Takes a Quantitive var and Qualitive Var in json file and makes it easier to read for computer



ReactDOM.render(
  <React.StrictMode>
    <App/>,
    <Vis/>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
