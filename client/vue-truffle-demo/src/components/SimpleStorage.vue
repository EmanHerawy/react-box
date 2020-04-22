<template>
  <div class="simplestorage">
    <div class="content">
      <h3>Example of a simple storage contract</h3>
      <p v-if="contractAddress">The contract is deployed at {{contractAddress}}</p>
      <p v-if="!contractAddress">No contracts found</p>
      <p v-if="account">Current account: {{account}}</p>
      <p v-if="!account">No accounts found</p>
      <input v-model="newValue" type="number">
      <button @click="updateValue">Update value in the contract</button>
      <p v-if="currentNumber">Value read from the contract: {{currentNumber}}</p>
      <p v-if="!currentNumber">Value not set</p>
    </div>
    <div class="message" v-if="message">{{message}}</div>
  </div>
</template>

<script>
// // import Web3 from 'web3'
// import contract from 'truffle-contract'
import SimpleStorageService from '../service/SimpleStorage.js'

export default {
  name: 'SimpleStorage',
  data () {
    return {
      message: null,
      service:null,
      contractAddress: null,
      account: "0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA",
      newValue: 0,
      currentNumber: 0
    }
  },
  created () {
 this.service = new SimpleStorageService();

  },
  methods: {
   async updateValue () {
      this.message = 'Transaction started'
        
      try{
     const tx=   await this.service.set(this.newValue,this.account,200000)
            this.message = `Transaction done`;
           await  this.updateCurrentNumber();
      }
      catch{
          this.message = 'Transaction failed'
      }
     
    },
   async updateCurrentNumber () {
   
       this.currentNumber = await this.service.get();
   
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  padding: 13px 13px 39px 13px;
}
.message {
  background: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 13px;
  line-height: 1;
  padding: 13px;
}
</style>
