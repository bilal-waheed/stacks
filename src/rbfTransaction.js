import {
  broadcastRawTransaction,
  makeSTXTokenTransfer,
  deserializeTransaction,
  addressToString,
} from "@stacks/transactions";

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
    network: "testnet",
    memo: transactionData.payload.memo.content.split("\x00")[0],
    nonce: transactionData.auth.spendingCondition.nonce,
    fee: transactionData.auth.spendingCondition.fee + BigInt(process.argv[5]),
    anchormode: transactionData.anchorMode,
  };
  console.log(txOptions);
  const transaction = await makeSTXTokenTransfer(txOptions);
  // serializing the transaction
  const serializedTx = transaction.serialize().toString("hex");
  const serArr = Uint8Array.from(serializedTx.split(","));

  const response = await broadcastRawTransaction(
    serArr,
    "https://stacks-node-api.testnet.stacks.co/v2/transactions"
  );

  console.log(response);
};

// example txid -> 0x99c32db5dfc2786e5dfce7a16a532e236c2cb612d3413d2b3eec0cacf6e2e95b
