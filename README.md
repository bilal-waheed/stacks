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

`node tool stxTokenTransfer [recipient address] [sender's private key] [amount] [fee] [network - mainnet | testnet] [nonce]`

### 2. Replace-by-fee (rbf) transaction

Enter the command with the following syntax

`node tool rbfTransaction [Transaction id (txid)] [sender's private key] [network - mainnet | testnet] [fee amount increment]`

### 3. Dust transaction

Enter the command with the following syntax

`node tool dustTransaction [recipient address] [sender's private key] [amount] [fee] [network - mainnet | testnet] [nonce]`

### 4. Sponsored transaction

Enter the command with the following syntax

`node tool sponsoredTransaction [recipient address] [sender's private key] [amount] [fee] [network - mainnet | testnet] [sender's nonce] [sponsor's private key] [sponsor's nonce]`
