import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import Header from "./Header/Header";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MainContent from "./MainContent/MainContent";
import Weather from "./Weather/Weather";
import AdvanceData from "./AdvanceData/AdavanceData";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Resume/>, document.getElementById('root')); // This way we can render the element
const MainPage = () => {
  const data = {
    name: "Swapnil Satish Shinde",
    rollno: "117A1076",
    imgurl: "https://avatars3.githubusercontent.com/u/37082605?s=460&v=4"
  };
  const mainPage = (
    <div>
      <Header />
      <ProfileHeader {...data} />
      <MainContent {...data} />
      <Weather />
      <AdvanceData />
      <App />
    </div>
  );

  return mainPage;
};

ReactDOM.render(<MainPage />, document.getElementById("root")); // This way we can render the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
