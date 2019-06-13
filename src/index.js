import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Photo from './37082605.jpeg';
import App from './App';
import * as serviceWorker from './serviceWorker';

const choise = "Swapnil" == "Swapnil" ? "myTitle" : "myAnotherTitle"

const element = (
  <div>
      <img className="profilePic" src="https://avatars3.githubusercontent.com/u/37082605?s=460&v=4" align="left"/>
      <br /> 
      <div className="mainText" >
        <h1 align="top">Swapnil Satish Shinde</h1>
        <h2 className="rollNo"> 117A1076</h2>
        <h2 className="college">SIES GST, Nerul</h2>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div  align="center" className="bio">
          <h3> Highly Passionate about learning new technologies and implementing them with minimum resources in
  less time. Team player who always has a smile on his face.</h3>
          <h3 className="work"> Work Experience</h3>
          <ol className="workExperience">
            <li className="point">Added Winston for logging and firebase storage for storing log files</li>
            <li className="point">Improved Validation of data using joi</li>
          </ol>
        </div>
        
  </div>
); // This is possible only in jsx this is not actual HTML

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('root')); // This way we can render the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();