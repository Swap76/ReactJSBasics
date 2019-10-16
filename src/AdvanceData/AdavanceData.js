import React, { Component } from "react";

class AdvanceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: [],
      user: []
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://us-central1-plusbeat-a5425.cloudfunctions.net/submitResponse"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let { doctor, user } = data;
        this.setState({
          doctor,
          user
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let a = null;
    const { doctor, user } = this.state;
    doctor.forEach(function(value) {
      let { name, patientList } = value;
      patientList.forEach(function(info) {
        let { patientID } = info;
        user.forEach(function(final) {
          if (final["_id"] === patientID) {
            console.log(
              `Ander araha hai ${name} ${patientID} ${final["name"]}`
            );
            a = (
              <div>
                <h3>
                  {" "}
                  {name} {patientID} {final["name"]}{" "}
                </h3>
              </div>
            );
          } else {
            a = (
              <div>
                <h1> Swapnil</h1>
              </div>
            );
          }
        });
      });
    });
    return a;
  }
}

export default AdvanceData;
