# IntroToDApps


## Requirements

* [Truffle]
   * [Node] v8.9.4 or later
* [Ganache]
* [Git]
* [Chrome Browser]
* [MetaMask Chrome Extension]
* [Kovan Testnet] Tokens (see detailed instructions below
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

### MetaMask SetUp

ToDo: Describe how to load keys into Ganache

**MetaMask Bug**: If you cannot select `custom rpc` from the MetaMask network selection
drop down, you can change the Ganache port to 8545 in `Accounts & Keys` in the
settings menu (the gear in the upper right corner of the Ganache GUI. Then you can
select `localhost 8545` in MetaMask. If you do this, you will also need to edit the
`truffle-config.js` file to use port 8545.







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