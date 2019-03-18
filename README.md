# IntroToDApps

:construction: ** Work in Progress ** :construction:

![reference](resources/ethereumDiagram.png)


## Requirements

* [Truffle]
   * [Node] v8.9.4 or later
* [Ganache]
* [Git]
* [Chrome Browser]
* [MetaMask Chrome Extension]
* [Kovan Testnet] Tokens (see detailed instructions below)
* [Infura] account

## Prerequisites

* Basic JavaScript skills
* [Truffle Pet Shop] Tutorial - highly recommended


### Testnet Tokens

Ethereum has three main 'test networks' (testnets): Ropsten, Kovan, and Rinkeby.
They are completely separate from each other and from the Ethereum Mainnet. Tokens
on the testnets are worth nothing, they are meant for developing and testing applications.

> > TestNet coins are worthless, but useful. They are useful because they are worthless. If you will add value to them, they will be useless, therefore worthless. 
> > — aphorism from a popular [Bitcoin testnet faucet]

For this workshop we will use Kovan. The easiest way to obtain kovan tokens is to
sign into [Gitter] using a valid GitLab, GitHub, or Twitter account
and then paste your receiving address into the [Kovan Testnet] gitter room.
Testnet tokens will automatically be sent to the address you pasted.

You must get your **Kovan** address from MetaMask. Be sure to select
`Kovan Test Network` from the network drop-down
at the top of the extension. You can click `Account 1` to easily copy the address.

### MetaMask SetUp

To use MetaMask with Ganache, you will need to setup a 'Custom RPC' network connection.
Follow these directions carefully:

1. Open Ganache, don't change any configurations.
2. In the Metamask extension, open the network drop-down menu (it should say `Main Ethereum Network` the first time you use Metamask).
3. Select `Custom RPC`
4. You should be on a `settings` tab, scroll down to `New Network`.
5. In the `New RPC URL` field enter `http://127.0.0.1:7545`
6. Click `Show Advanced Options`.
7. In the `ChainID` field, enter `5777`.
8. Click the `Save` button.
9. Click the `X` in upper right of the extension window if the settings don't go away.
10. You should see a balance of 100 ETH.

**Debug Tip** Resetting Ganache will confuse your MetaMask extension (blockchains
aren't supposed to change). When you reset Ganache, you also need to reset MetaMask.
There is a `Reset Account` button located under `Settings` for this purpose. `Settings`
can be found in the menu shown by clicking the colorful circle in the upper right of the MetaMask.

### Clone this repository

```
git clone https://github.com/destrys/IntroToDApps.git
cd IntroToDApps
```

### Install Dependencies

Navigate to the pet-shop-tutorial directory and install the dependencies:

```
cd pet-shop-tutorial
npm install
```

# Smart Contracts

All paths and commands assume you are in the `pet-shop-tutorial` directory.

Open `contracts/Adoption.sol` in your text editor.

We'll discuss the function and design of this 'smart' contract for a bit.

Some important points to covers:

1. What is stored in the contract?
2. How is the contract initialized?
3. How is the state changed, and who has access?
4. What cannot be changed?
5. What off-chain information is part of the app and how are those data joined?

Note: Docs regarding the [array getter function].


## Tests

Open `test/TestAdoption.sol`.

We'll discuss testing.


**WIP**











infura reference: https://medium.com/coinmonks/steps-to-deploy-a-contract-using-metamask-and-truffle-7ae65e6d8dc8


[truffle]: https://truffleframework.com/docs/truffle/getting-started/installation
[node]: https://nodejs.org/en/
[ganache]: https://truffleframework.com/ganache
[git]: https://git-scm.com/
[chrome browser]: https://www.google.com/chrome/
[metamask chrome extension]: https://metamask.io/
[kovan testnet]: https://gitter.im/kovan-testnet/faucet
[infura]: https://infura.io

[truffle pet shop]: https://truffleframework.com/tutorials/pet-shop

[bitcoin testnet faucet]: http://tpfaucet.appspot.com/
[gitter]: https://gitter.im
[array getter function]: https://solidity.readthedocs.io/en/latest/types.html#arrays