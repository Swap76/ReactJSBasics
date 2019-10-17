import React from "react";
import "./resume.css";

function Resume() {
  let app = (
    <div>
      <img
        className="profilePic"
        alt="swapnil"
        src="https://avatars3.githubusercontent.com/u/37082605?s=460&v=4"
        align="left"
      />
      <br />
      <div className={"mainText"}>
        <h1 align="top">Swapnil Satish Shinde</h1>
        <h2 className={"rollNo"}> 117A1076</h2>
        <h2 className={"college"}>SIES GST, Nerul</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div align="center" className={"bio"}>
        <h3>
          {" "}
          Highly Passionate about learning new technologies and implementing
          them with minimum resources in less time. Team player who always has a
          smile on his face.
        </h3>
        <h3 className={"work"}> Work Experience</h3>
        <ol className={"workExperience"}>
          <li className={"point"}>
            Added Winston for logging and firebase storage for storing log files
          </li>
          <li className={"point"}>Improved Validation of data using joi</li>
        </ol>
      </div>
    </div>
  );
  return app;
}

export default Resume;
