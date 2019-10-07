import React from 'react';

import App from '../App/App';
import Header from '../Header/Header';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import MainContent from '../MainContent/MainContent';
import Weather from '../Weather/Weather';
import AdvanceData from '../AdvanceData/AdavanceData';

const data = {
  name: "Swapnil Satish Shinde",
  rollno: "117A1076",
  imgurl: "https://avatars3.githubusercontent.com/u/37082605?s=460&v=4"
};

const MainPage = props => (
  <div>
    <Header/>
    <ProfileHeader {...data} />
    <MainContent {...data} />
    <Weather/>
    <AdvanceData/>
    <App/>
  </div>
 );

export default MainPage;

