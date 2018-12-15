import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Package from './Components/Package';
import Offers from './Components/Offers';
import Tours from './Components/Tours';
import Photos from './Components/Photos';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Package />, document.getElementById('package'));
ReactDOM.render(<Offers />, document.getElementById('offers'));
ReactDOM.render(<Tours />, document.getElementById('list'));
ReactDOM.render(<Photos />, document.getElementById('photos'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
