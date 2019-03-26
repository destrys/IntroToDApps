# IntroToDApps

:construction: **Work in Progress** :construction:

First, an ugly diagram:

![reference](resources/ethereumDiagram.png)


## Requirements

* [Truffle]
   * [Node] v8.9.4 or later
* [Ganache]
* [Git]
* [Chrome Browser]
* [MetaMask Chrome Extension]
* [Kovan Testnet] Tokens (see detailed instructions below)
* [Infura.io] account

**Windows Users:** Try using [VS Code with Truffle]

## Prerequisites

* Basic JavaScript skills
* [Truffle Pet Shop] Tutorial - highly recommended

### Truffle

It makes life a lot easier if you install truffle globally:

`npm install -g truffle`


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

#### Seed Words

MetaMask and Ganache need to be using the same seed words to use the same accounts.
You can choose either of these routes:

##### Use MetaMask Seed Words (recommended)

1. Set up MetaMask
2. If you didn't copy the seed phrase (you should have!) go to the MetaMask Settings
and select 'Reveal Seed Words'. Copy them.
3. Open Ganache
4. Navigate to "Accounts & Keys" in the Ganache settings
5. Turn **OFF** 'autogenerate HD Mnemonic' and paste the words from step 2.
6. Click 'Save & Restart'


##### Use Ganache Seed Words

1. Start up Ganache
2. Copy the **MNEMONIC** (12 random words near the top of the ganache window)
3. Navigate to "Accounts & Keys" in the Ganache settings
4. Turn **OFF** 'autogenerate HD Mnemonic' and paste the 12 words from step 2.
5. Click 'Save & Restart'
6. If you haven't used MetaMask before, use 'Import with Seed Phrase' during the
intial MetaMask configuration
7. If you have used MetaMask before, Log Out, then select 'Import using
account seed phrase' at the bottom of the log in window.
8. Use the words from step 2 to re-initialize MetaMask



#### Connection

To use MetaMask with Ganache, you will need to setup a 'Custom RPC' network connection.
Follow these directions carefully:

1. Start Ganache, don't change any configurations.
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

# Exercise - Interact with an example dApp

Assuming installation and config is correct (see above), running the
pet shop example dApp should be as easy as following these steps:

1. Start Ganache
2. Select the Custom RPC interface and 'Reset Account' in MetaMask
3. From within the `pet-shop-tutorial` directory: `truffle migrate --reset`
4. From within the `pet-shop-tutorial` directory: `npm run dev`
5. Direct your browser to `localhost:3000`

When you click 'adopt', MetaMask should pop up an authorization window.
Authorizing the transaction should change the button from 'Adopt' to 'Success'.

The important files for this dApp are:
(pet-shop-tutorial/contracts/Adoption.sol)[pet-shop-tutorial/contracts/Adoption.sol],
(pet-shop-tutorial/src/index.html)[pet-shop-tutorial/src/index.html],
and (pet-shop-tutorial/src/js/app.js)[pet-shop-tutorial/src/js/app.js].
Open them in you text editor and poke around.



# Smart Contracts

All paths and commands assume you are in the `pet-shop-tutorial` directory.

Open `contracts/Adoption.sol` in your text editor.

We'll discuss the function and design of this 'smart' contract for a bit.

Some important points to cover:

1. What is stored in the contract?
  a. State
  b. Logic
  c. Views (in this case)
2. How is the contract initialized?
3. How is the state changed, and who has access?
4. What cannot be changed?
5. What off-chain information is part of the app and how are those data joined?

Note: Docs regarding the [array getter function].


## Tests

Open `test/TestAdoption.sol` and `test/TestAdoption.js`

We'll discuss testing. Some important points to cover:

1. Solidity vs. Javascript testing
2. The importance of testing


# Exercise - Smart Contract Improvements

## Disallow re-adoption of same pet.

As-is, another address could `adopt()` a pet that has already been adopted,
overwriting the first adopter's address. The UI doesn't allow this by
disabling the button, but it wouldn't be hard for someone to change the UI...
You can see this by commenting out the following line in `src/js/app.js`
(it's part of the `markAdopted` function).

```
$('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
```

Implementing this restriction only requires a single line of code, but
think it through carefully. I've included a test file that you can use.
Copy the `TestReAdopt.js` from `solutions/` to `test/`.
Running `truffle test` will now test the an adopted pet can't be re-adopted.

The solution is provided in `solutions/Adoption_stop_readopt.sol`.

**Note:** The tests for this exercise include tests the the contract `reverts`.
This is an important result to test for (and should have been included in the initial
tests)



## Admin address

Now that our contract only allows a pet to be adopted once, it really can only
handle 16 adoptions and then it's done. It would be nice if someone could reset
a pet to unadopted, but we don't want anyone on the internet to be able to do that.

So now we need a privaledged user.

The easiest way to set an admin user is to initialize the admin user as the
address that deployed the contract. Our contract currently doesn't run any function
as it's initialized. You'll need to create the `constructor` function which is
a special function that is only called once, when the contract is created.
([Constructor Function Docs])

Tests are provided in `solutions/TestAdmin.js`, copy to `test/` to use.

The solution is provided in `solutions/Adoption_admin.sol`.

## Admin Reset Function


Now that we have an admin address, let's create a function only the admin can use.
It's basically the reverse of the the `adopt()` function, so let's call it
`unadopt()`. It still needs to check that the index is valid, but it
also needs to check if the address executing the function is the admin.
The address executing the transaction is available at `msg.sender`.
Give it a shot.

Tests are provided in `solutions/TestUnadopt.js`, copy to `test/` to use.

The solution is provided in `solutions/Adoption_unadopt.sol`.

There are additional checks and functions you could add around this feature:

1. Don't allow `unadopt` to be called if the pet hasn't been adopted.
2. Allow the admin *or the address that adopted* to unadopt
3. Create an `unadoptAll` function so an admin could clear all the pets in one transaction.


## Some Additional Ideas:

1. Add a price to adopting. (look up `payable` in the solidity docs)
2. Create a whitelist of addresses that are allowed to adopt.
3. Add a pet identifier to the state



## Addition Smart Contract Resources

1. [Remix] - alternative/complementary IDE
2. [The Ethernaut] - learn smart contract security issues via blockchain-based 'game'



# DApps, UIs, Etc.

The term DApp ('decentralized app' or 'distributed app') is used as a catch-all
for a lot of things. It is usually used to talk about a website that connects to
a blockchain. Hopefully as the industry matures, the definition will harden.
For this class, DApp refers to the entire system, both smart contract and interface.

So let's look at the included interface for this tutorial.

**Note:** If you haven't finished the exercies above,
copy `solutions/Adoption_unadopt.sol` to `contracts/Adoption.sol`. If you
want to re-work through the exercises, the original `Adoption.sol` is
included at `solutions/Adoption_original.sol`.

Points to cover:

1. Glance at the html
2. [web3 package] - where does it come from, what does it do? (window.ethereum)
3. What data are available on load?
4. How to request data.
5. How to form and execute transactions.

**Note:** This app included `web3` and `truffle-contract` files. For your project,
you may want to use the npm to include the [web3] and [truffle-contract]

**Caution!** The `web3` included in this app is an older version. `web3` v1.0
is still in beta and
has many breaking changes, so for this class, refer to the [old web3 docs]. 


## Exercise - Admin Viewing Button

Let's edit the app to notify the viewer if they are the admin.

Copy `solutions/index_admin_badge.html` to replace `src/index.html`.

In `src/js/app.js` take a shot at writing a `setAdmin` function that
checks if the logged-in [account] matches the admin account of the contract.
If it doesn't match, [hide] the admin badge.

And be sure to run `setAdmin()` in `initContract`.

A solution is provided in `solutions/app_admin_badge.js`.

## Exercise - UnAdopt Button

Let's continue by providing the admin an interface to the `unadopt` contract
function.

Copy `solutions/index_unadopt.html` to `src/index.html` (or write your own button
code).

As part of `setAdmin`, also hide the `unadopt` buttons from non-admins.

Write a `handleUnadopt` function to call `unadopt` on the contract
when the Unadopt button is clicked. And don't forget to add the handler to
`bindEvents`.

**Important Note:** While we are hiding the admin interface from non-admins, there
is nothing to stop and address from *attempting* to call `unadopt` on our contract.
What is powerful about dApps is that the authorization is handled by ethereum.
If the transaction isn't signed by the admin's address, the contract will call
`revert` and the transaction will be unsuccessful. We don't have to worry
about users or passwords.

## Additional Ideas

1. Admin `resetAll` function
  a. contract function that resets all adopters
  b. Admin-only button
2. Encode the Pet Name in the Smart Contract
  a. Add another array in the smart contract for pet name
  b. Choose how to initialize (and edit) the names in the contract
  c. Decide how to pull names from contract, and add that to the UI.
3. Allow the adopter to also see the Unadopt button.
  a. Edit the smart contract to allow the admin *or* the adopter call `unadopt`.
  b. Edit the javascript to show the Unadopt button for the adopter as well.


# Deployment

There are two parts of deploying our dApp: the smart contract and the web app.

## Smart Contract Deployment

So far, we've been deploying our smart contract to our local blockchain (Ganache)
with Truffle. For our app to actually be distributed/decentralized, we need
to deploy the contract to a external blockchain. And we don't want it to cost
us real money to do this while were' developing. So we'll be using one of the
ethereum testnets (Rinkeby, Kovan, or Ropsten).

**Note:** There are many services available to assist you in deploying your
smart contract. Do your research before using any third-party service.

The safest route is to run your own full node, and what I recommend, but
setting up a full node takes time for downloading the blockchain, and takes
work to keep synced and running. So for development, and this class, we'll be using
[Infura.io] for a hosted node.

Here are the steps:

1. Sign up for [Infura.io]
2. Create a project
3. 'View Project' and copy the `Project ID`
4. Paste the `Project ID` into the `.env` file in the pet shop directory
as `INFURA_API_KEY`.
5. Paste your seed words from ganache/MetaMask into `.env`
6. Edit `truffle-config.js` to include a `kovan` network.
An example is provided in `solutions/truffle-config_kovan.js`
7. `truffle migrate --network kovan`
8. Go find your contract on a block explorer!

[Infura-Truffle reference 1]
[Infura-Truffle reference 2]

## Web App deployment

Our web app has (hopefully) been working great using our locally running
[lite server]. But that's not a real solution. We could deploy host this app
on any of our favorite hosting sites, or our own server. But if we
are able to bundle this app up, we have some more interesting options.

I've included a copy of `index.html` and `app.js` that we can use with
[browserify] to avoid doing calls to the server for `.json` files.

Copy `solutions/index_bundleable.html` to `src/index.html` and
`solutions/app_bundleable.js` to `src/js/app.js`. We'll take a look at
what's going on there.

Assuming you've migrated your contract (with admin and unadopt features)
to kovan already, this command will
bundle up the javascript:

```
./node_modules/browserify/bin/cmd.js src/js/app.js > src/js/bundled.js
```

Now you should be able to point your browser at
`file:///INSERT_PATH_TO_REPO_HERE/IntroToDApps/pet-shop-tutorial/src/index.html`
and see a bunch of dog faces, but you **won't** be able to interact with the dApp.
The reason is that MetaMask is retricted to `localhost` and `https` sites.
`file:` is neither of those, so MetaMask won't work.

We need to find somewhere to host these files. If you have a file server with
https enabled, that should work. S3 or Azure also would work.
My personal favorite for fast development and easy sharing is
[github pages].

1. Fork this repo to your own github account
2. Turn on [github pages] for the repo, using the `master` branch.
3. Run the browserify command above
4. add `src/js/bundled.js` and all the other changed files to a git commit
5. push to your github `master branch`
6. Direct your browser to `https://INSERT_GITHUB_USERNAME_HERE.github.io/IntroToDApps/pet-shop-tutorial/src/index.html`



## Other Things to Consider

1. Instead of including the deployed contract address as part of the dApp, you could
add a field where the user inputs the contract address. This decouples the web app
from the smart contract.


# About the Instructor

I'm Destry! I'm employee #0 at [Unchained Capital]. While early start-ups require
everyone to work on everything, my focus has been on being our blockchain specialist.
Address creation, authoring transactions, hardware wallet integrations,
signing protocols, and [our ethereum multisig dApp] are examples of what I've
been working on. Before Unchained, I was a data scientist/engineer/big data solution
architect at InfoChimps and Cisco. And before that, I earned a Ph.D. in
[astrophyics].


[infura reference]: https://medium.com/coinmonks/steps-to-deploy-a-contract-using-metamask-and-truffle-7ae65e6d8dc8


[truffle]: https://truffleframework.com/docs/truffle/getting-started/installation
[node]: https://nodejs.org/en/
[ganache]: https://truffleframework.com/ganache
[git]: https://git-scm.com/
[chrome browser]: https://www.google.com/chrome/
[metamask chrome extension]: https://metamask.io/
[kovan testnet]: https://gitter.im/kovan-testnet/faucet
[infura.io]: https://infura.io

[truffle pet shop]: https://truffleframework.com/tutorials/pet-shop

[bitcoin testnet faucet]: http://tpfaucet.appspot.com/
[gitter]: https://gitter.im
[array getter function]: https://solidity.readthedocs.io/en/latest/types.html#arrays
[constructor function docs]: https://solidity.readthedocs.io/en/v0.5.6/contracts.html#creating-contracts
[remix]: https://remix.ethereum.org
[the ethernaut]: https://ethernaut.zeppelin.solutions/
[vs code with truffle]: https://medium.com/edgefund/ethereum-development-on-windows-part-1-da260f6a6c06
[web3 package]: https://web3js.readthedocs.io/en/1.0/
[web3]: https://www.npmjs.com/package/web3
[truffle-contract]: https://www.npmjs.com/package/truffle-contract
[old web3 docs]: https://github.com/ethereum/wiki/wiki/JavaScript-API
[account]: https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethaccounts
[hide]: http://api.jquery.com/hide/
[truffle with infura]: https://truffleframework.com/tutorials/using-infura-custom-provider
[infura-truffle reference 1]: https://truffleframework.com/tutorials/using-infura-custom-provider
[infura-truffle reference 2]: https://medium.com/coinmonks/deploy-your-smart-contract-directly-from-truffle-with-infura-ba1e1f1d40c2
[unchained capital]: https://www.unchained-capital.com/
[astrophyics]: http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?db_key=AST&db_key=PRE&qform=AST&arxiv_sel=astro-ph&arxiv_sel=cond-mat&arxiv_sel=cs&arxiv_sel=gr-qc&arxiv_sel=hep-ex&arxiv_sel=hep-lat&arxiv_sel=hep-ph&arxiv_sel=hep-th&arxiv_sel=math&arxiv_sel=math-ph&arxiv_sel=nlin&arxiv_sel=nucl-ex&arxiv_sel=nucl-th&arxiv_sel=physics&arxiv_sel=quant-ph&arxiv_sel=q-bio&sim_query=YES&ned_query=YES&adsobj_query=YES&aut_logic=OR&obj_logic=OR&author=Saul%2C+Destry&object=&start_mon=&start_year=&end_mon=&end_year=&ttl_logic=OR&title=&txt_logic=OR&text=&nr_to_return=200&start_nr=1&jou_pick=ALL&ref_stems=&data_and=ALL&group_and=ALL&start_entry_day=&start_entry_mon=&start_entry_year=&end_entry_day=&end_entry_mon=&end_entry_year=&min_score=&sort=SCORE&data_type=SHORT&aut_syn=YES&ttl_syn=YES&txt_syn=YES&aut_wt=1.0&obj_wt=1.0&ttl_wt=0.3&txt_wt=3.0&aut_wgt=YES&obj_wgt=YES&ttl_wgt=YES&txt_wgt=YES&ttl_sco=YES&txt_sco=YES&version=1
[our ethereum multisig dapp]: https://ethereum-multisig.unchained-capital.com/
[lite server]: https://www.npmjs.com/package/lite-server
[browserify]: http://browserify.org/
[github pages]: https://pages.github.com/