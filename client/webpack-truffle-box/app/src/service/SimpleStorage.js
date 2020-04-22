
import web3 from 'web3';
import contract from 'truffle-contract';

import contractArtifact from '../build/contracts/SimpleStorage.json';

export default class SimpleStorageService{

constructor() { 

this.web3Provider = new web3.providers.HttpProvider(
'http://127.0.0.1:8545'
);

this.web3 = new web3(this.web3Provider);

this.initContract().then(s => {});

}

async initContract() {

this.service = contract(contractArtifact);

this.service.setProvider(this.web3Provider);

}


  async set(x,_from,_gas){    
        const instance = await this.service.deployed();
        const data = await  instance. set(x,{ from:_from, gas: _gas  });  

        return data;
 
 
 }
  async get(){

        const instance = await this.service.deployed(); 

        const data = await instance.get.call();

       return data.toNumber();

}

}