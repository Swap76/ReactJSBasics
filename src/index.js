import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './Resume/Resume';
import Header from './Header/Header';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MainContent from './MainContent/MainContent';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Resume/>, document.getElementById('root')); // This way we can render the element
const MainPage = () => {
  const mainPage = (
    <div>
      <Header/>
      <ProfileHeader/>
      <MainContent/>
    </div>
  );
  
  return mainPage;
}

ReactDOM.render(<MainPage/>, document.getElementById('root')); // This way we can render the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();