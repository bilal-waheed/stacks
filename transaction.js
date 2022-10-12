import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  AnchorMode,
  getAddressFromPrivateKey,
  getNonce,
  TransactionVersion,
} from "@stacks/transactions";

const createTxOptions = async () => {
  // data from the command line
  const recipient = process.argv[2];
  const senderKey = process.argv[3];
  const amount = BigInt(process.argv[4]);
  const fee = BigInt(process.argv[5]);
  const network = process.argv[6];
  const address = await getAddressFromPrivateKey(
    senderKey,
    TransactionVersion.Testnet
  );
  const nonce = process.argv[7] || (await getNonce(address, network));

  return {
    recipient,
    amount,
    senderKey,
    network,
    memo: "test transaction",
    nonce,
    fee,
    anchormode: AnchorMode.Any,
  };
};

const txOptions = await createTxOptions();

// creating transaction object
const transaction = await makeSTXTokenTransfer(txOptions);

// broadcasting transaction
const broadcastResponse = await broadcastTransaction(transaction);

console.log(broadcastResponse);
