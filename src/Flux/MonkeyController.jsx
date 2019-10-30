import React from "react";
import * as MonkeyActions from "./MonkeyAction";
class MonkeyController extends React.Component {
  state = {
    activity: "stand"
  };

  controllMonkey = (activity) => {
    MonkeyActions.changeActivity(activity);
  };

  render() {
    return (
      <div style={{ textAlign: "center", alignContent: "center" }}>
        <h4>Flux Example</h4>
        <p>Below is a simple use case where Flux architecture is applied.</p>
        <button className="button" onClick={() => this.controllMonkey("play")}>
          Play
        </button>
        <button className="button" onClick={() => this.controllMonkey("stand")}>
          Rest
        </button>
        <br />
      </div>
    );
  }
}

export default MonkeyController;
