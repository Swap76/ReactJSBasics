// Here we import the required dependencies
import React, { Component, Fragment } from "react";

// Using the ES5 approach for first functional component declaration
function FirstComponent() {
  const greeting = "Hello First Functional Component!";
  return <h2>{greeting}</h2>;
}

// Using the ES6 approach for second functional component declaration (recommended) to show the given props
const SecondComponent = props => {
  return <h3>{props.name}</h3>;
};

// Third functional Component which shows a button with onClick action
function ThirdComponent() {
  const showText = () => {
    alert("Hello im the third component called");
  };
  return <button onClick={showText}>Click me, Im the Third Component</button>;
}

// Using a class Component for rendering the 3 functional Components

class BasicComponent extends Component {
  render() {
    return (
      // Using Fragment here as a virtual div to wrap all the components in it and calling each one by one
      <Fragment>
        {/*Using inline css */}
        <div style={{textAlign: "center"}}>
        <h1>Basic Component</h1>
        {/*Calling first Functional Component */}
        <FirstComponent />
        {/*Using props here as just for an example component */}
        <SecondComponent name={"Second Functional Component"} />
        {/*Third component with button action */}
        <ThirdComponent />
        </div>
      </Fragment>
    );
  }
}

export default BasicComponent;
