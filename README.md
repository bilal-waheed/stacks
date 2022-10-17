# Stacks CLI-tool

Cli tool for making various transactions on Stacks networks, both mainnet and testnet.

## Usage

Clone the repository and run `npm install`

Four different transaction types can be sent using the tool.

1. Simple STX token transfer.
2. Replace-by-fee (rbf) transaction.
3. Dust transaction.
4. Sponsored transaction.

Make sure you are in the cloned repository before executing any command.

### 1. Simple STX token transfer

Enter the command with the following syntax

`npm start stxTokenTransfer [network - mainnet | testnet] [recipient address] [sender's private key] [amount] [fee] [nonce]`

### 2. Replace-by-fee (rbf) transaction

Enter the command with the following syntax

`npm start rbfTransaction [network - mainnet | testnet] [Transaction id (txid)] [sender's private key] [fee amount increment]`

### 3. Dust transaction

Enter the command with the following syntax

`npm start dustTransaction [network - mainnet | testnet] [recipient address] [sender's private key] [amount] [fee] [nonce]`

### 4. Sponsored transaction

Enter the command with the following syntax

`npm start sponsoredTransaction [network - mainnet | testnet] [recipient address] [sender's private key] [amount] [fee] [sender's nonce] [sponsor's private key] [sponsor's nonce]`
