import React, {
  Component
} from "react";

import "./App.css";
// import your service file here 
import SimpleStorageService from './service/SimpleStorage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      storageValue: 0,
       account: "0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA",
       connected:false
    };

  }
  componentDidMount = async () => {
    try {

      // Get the contract instance.
      const service = new SimpleStorageService();
      // Get the value from the contract to prove it worked.
      const response = 0//await service.get(); //

      // Update state with the result.
      this.setState({
        storageValue: response,
        connected:true
      });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  runExample = async () => {
    // Get the contract instance.
    const service = new SimpleStorageService();
    // Stores a given value, 5 by default.
    //await service.set(5, this.state.account, 200000);
    // Get the value from the contract to prove it worked.
    const response = 0;//await service.get();

    // Update state with the result.
    this.setState({
      storageValue: response
    });
  };
  render() {
    if (!this.state.connected) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
      <dive >
      <button onClick = {this.runExample} > Add storage </button>
      </dive>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
