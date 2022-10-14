import {
  broadcastRawTransaction,
  makeSTXTokenTransfer,
  deserializeTransaction,
  addressToString,
} from "@stacks/transactions";

// Returns StacksTransaction object converted from raw transaction (bytes)
const getRawTx = async (txid) => {
  const res = await fetch(
    `https://stacks-node-api.testnet.stacks.co/extended/v1/tx/${txid}/raw`
  );

  const jsonData = await res.json();
  const transaction = deserializeTransaction(jsonData.raw_tx);

  return transaction;
};

export const rbfTransaction = async () => {
  const transactionData = await getRawTx(process.argv[3]);

  const txOptions = {
    recipient: addressToString(transactionData.payload.recipient.address),
    amount: transactionData.payload.amount,
    senderKey: process.argv[4],
    network: process.argv[5],
    memo: transactionData.payload.memo.content.split("\x00")[0],
    nonce: transactionData.auth.spendingCondition.nonce,
    fee: transactionData.auth.spendingCondition.fee + BigInt(process.argv[6]),
    anchormode: transactionData.anchorMode,
  };

  const transaction = await makeSTXTokenTransfer(txOptions);

  // serializing the transaction
  const serializedTx = transaction.serialize().toString("hex");

  //converting the string to Uint8Array
  const serArr = Uint8Array.from(serializedTx.split(","));

  const response = await broadcastRawTransaction(
    serArr,
    "https://stacks-node-api.testnet.stacks.co/v2/transactions"
  );

  console.log(response);
};
