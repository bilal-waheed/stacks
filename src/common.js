import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  AnchorMode,
  getAddressFromPrivateKey,
  getNonce,
  TransactionVersion,
} from "@stacks/transactions";

const calcNonce = async () => {
  const address = await getAddressFromPrivateKey(
    process.argv[4], //senderKey
    TransactionVersion.Testnet
  );
  const nonceFromAddress = await getNonce(address, "testnet");
  const nonceFromCLI = process.argv[8];
  return [nonceFromCLI, nonceFromAddress];
};

const createTxOptions = async () => {
  // data from the command line
  const recipient = process.argv[3];
  const senderKey = process.argv[4];
  const amount = BigInt(process.argv[5]);
  const fee = BigInt(process.argv[6]);
  const network = process.argv[7];

  return {
    recipient,
    amount,
    senderKey,
    network,
    memo: "test transaction",
    fee,
    anchormode: AnchorMode.Any,
  };
};

const sendTransaction = async (txOptions) => {
  const transaction = await makeSTXTokenTransfer(txOptions);

  const broadcastResponse = await broadcastTransaction(transaction);

  return broadcastResponse;
};

const getMempoolData = async () => {
  const mempoolNonceData = await fetch(
    "https://stacks-node-api.testnet.stacks.co/extended/v1/address/ST1P44DKMKA01XPCKEAGF8BAGXZF8MRKY2SF20B11/nonces"
  );
  const jsonData = await mempoolNonceData.json();
  return jsonData;
};

export { createTxOptions, sendTransaction, calcNonce, getMempoolData };
