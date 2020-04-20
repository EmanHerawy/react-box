# React/angular/wvuejs/webpack Truffle Boxes with truffle-web3-generator 

This box comes with everything you need to start using truffle-web3-generator from a React/angular/wvuejs/webpack app. This is as barebones as it gets, so nothing stands in your way.

## Installation

First ensure you are in a new and empty directory.

1. Run ganache-cli with seed 
     ```javascript
    ganache-cli  -s 0
    ```

2. Run 
   ```javascript
    npm i
    ```


3. Run
   ```javascript
    truffle migrate
    ```
   
4. Run
    ```javascript
    truffle run generate
    ```

5. Move the service & build folders inside React/angular/wvuejs/webpack src folder or any other folders 
    

6. In the `client` got to your prefered web framework , we run the React/angular/wvuejs/webpack app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm i
    npm run start
    ```

7. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // inside the development console.
    test

    // outside the development console..
    truffle test
    ```

8. import your service file and call its function .
   

9. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run build
    ```
   ## Notes :
   1.  Events aren't supported yet
   2.  metamask or any other wallets are not supported yet. 

## FAQ

* __How do I use this with the Ganache-CLI?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks).

* __Where is my production build?__

    The production build will be in the `client/build` folder after running `npm run build` in the `client` folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
