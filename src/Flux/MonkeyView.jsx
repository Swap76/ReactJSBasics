import React from "react";
import stand from "./stand.jpg";
import play from "./play.jpg";
import MonkeyStore from "./MonkeyStore";

class MonkeyView extends React.Component {
  state = {
    position: MonkeyStore.getActivity()
  };

  componentDidMount() {
    MonkeyStore.on("storeUpdated", this.updateActivity);
  }

  componentWillUnmount() {
    MonkeyStore.removeListener("storeUpdated", this.updateActivity);
  }

  updateActivity = () => {
    console.log("Monkey View=>" + MonkeyStore.getActivity());
    this.setState({ position: MonkeyStore.getActivity() });
  };

  render() {
    const MonkeyCurrently =
      this.state.position === "play" ? (
        <img src={play} alt={this.state.position} height="200px" width="180px" />
      ) : (
        <img src={stand} alt={this.state.position} height="200px" width="180px" />
      );
    return (
      <div style={{ textAlign: "center", alignContent: "center" }}>
        <br />
        {MonkeyCurrently}
      </div>
    );
  }
}

export default MonkeyView;
