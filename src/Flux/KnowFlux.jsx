import React from "react";
import Modal from "./Modal";

class KnowFlux extends React.Component {
  state = {
    show: false
  };

  findWhatFluxIs = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div
        className="row"
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <br />
        <button type="button" onClick={this.findWhatFluxIs}>
          Get to know Flux!
        </button>
        <br />
        <Modal show={this.state.show} handleClose={this.closeModal}>
          <h3>What is Flux?</h3>
          <p>
            To begin with, flux is not a framework or plugin. Flux is the
            architecture of unidirectional data flow across components. We can
            design applications without using Flux architecture, but it sure has
            its benefits and the outcome is a clean design. Following are some
            important concepts in Flux.
          </p>
          <li>Action</li>
          <p>
            Actions pass data to the Dispatcher. Actions are aware of the source
            of data in the application. The datasource could be files having
            configuration or an API providing data or database. Also actions act
            upon feedback from the user from controller views.
          </p>
          <li>Dispatcher</li>
          <p>
            Dispatcher receives actions and broadcasts payloads to the callbacks
            registered by store.
          </p>
          <li>Store</li>
          <p>
            Stores register the callbacks to dispatcher and listen to the action
            payloads passed. Accordingly Store taks care of passing the state to
            the Controller Views
          </p>
          <li>Controller View</li>
          <p>
            These React components obtain the state from stores and pass the
            information to update the views in various child components
          </p>
          <br />
        </Modal>
      </div>
    );
  }
}

export default KnowFlux;
