import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resume from './Resume/Resume';
import Header from './Header/Header';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Resume/>, document.getElementById('root')); // This way we can render the element

ReactDOM.render(<Header/>, document.getElementById('root')); // This way we can render the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();