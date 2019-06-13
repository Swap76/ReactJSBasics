import React from 'react';
import './MainContent.css';

const MainContent = (props) => {
    let app = (
      <div>
        <div className={"mainText"} >
          <h1 align="top">{props.name}</h1>
          <h2 className={"rollNo"}> {props.rollno}</h2>
          <h2 className={"college"}>SIES GST, Nerul</h2>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  return app;
}

export default MainContent;