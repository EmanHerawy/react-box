import SimpleStorageService from './service/SimpleStorage.js';
const App = {
  web3: null,
  account: "0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA",
  service: null,

  start: async function() {

    try {
      // get contract instance
 
      this.service = new SimpleStorageService();

      // get accounts
     

      this.refreshBalance();
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  refreshBalance: async function() {
   
    const storageValue = await this.service.get();

    const balanceElement = document.getElementsByClassName("storageValue")[0];
    balanceElement.innerHTML = storageValue;
  },

  setValue: async function() {
 
  
    await this.service.set(10, this.account,200000)

    this.setStatus("Transaction complete!");
    this.refreshBalance();
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },
};

window.App = App;

window.addEventListener("load", function() {

  App.start();
});
