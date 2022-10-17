import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  broadcastRawTransaction,
  AnchorMode,
  getAddressFromPrivateKey,
  getNonce,
  TransactionVersion,
} from "@stacks/transactions";
import {
  AMOUNT,
  NETWORK,
  RECIPIENT,
  SENDER_KEY,
  FEE,
  NONCE,
} from "./constants.js";

const getAddress = async () => {
  const address = await getAddressFromPrivateKey(
    SENDER_KEY,
    NETWORK == "testnet"
      ? TransactionVersion.Testnet
      : TransactionVersion.Mainnet
  );
  return address;
};

const calcNonce = async () => {
  const address = await getAddress();
  const nonceFromAddress = await getNonce(address, NETWORK);
  const nonceFromCLI = NONCE;
  return [nonceFromCLI, nonceFromAddress];
};

const createTxOptions = async () => {
  // data from the command line
  // const recipient = RECIPIENT;
  // const senderKey = SENDER_KEY;
  // const amount = AMOUNT;
  // const fee = FEE;
  // const network = NETWORK;

  return {
    recipient: RECIPIENT,
    amount: AMOUNT,
    senderKey: SENDER_KEY,
    network: NETWORK,
    memo: "test transaction",
    fee: FEE,
    anchormode: AnchorMode.Any,
  };
};

const sendTransaction = async (txOptions) => {
  const transaction = await makeSTXTokenTransfer(txOptions);

  const broadcastResponse = await broadcastTransaction(transaction);

  return broadcastResponse;
};

export const sendRawTransaction = async (serializedArray) => {
  const response = await broadcastRawTransaction(
    serializedArray,
    `https://stacks-node-api.${NETWORK}.stacks.co/v2/transactions`
  );
  return response;
};

const getMempoolData = async () => {
  const address = await getAddress();
  const mempoolNonceData = await fetch(
    `https://stacks-node-api.${NETWORK}.stacks.co/extended/v1/address/${address}/nonces`
  );
  const jsonData = await mempoolNonceData.json();
  return jsonData;
};

export { createTxOptions, sendTransaction, calcNonce, getMempoolData };
