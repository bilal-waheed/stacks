import {
  makeSTXTokenTransfer,
  deserializeTransaction,
  addressToString,
} from "@stacks/transactions";

import { FEE_INCREMENT, NETWORK, SENDER_KEY, TXID } from "./constants.js";
import { sendRawTransaction } from "./common.js";

// Returns StacksTransaction object converted from raw transaction (bytes)
const getRawTx = async (txid) => {
  const res = await fetch(
    `https://stacks-node-api.${NETWORK}.stacks.co/extended/v1/tx/${txid}/raw`
  );

  const jsonData = await res.json();
  const transaction = deserializeTransaction(jsonData.raw_tx);

  return transaction;
};

export const rbfTransaction = async () => {
  const transactionData = await getRawTx(TXID);

  const txOptions = {
    recipient: addressToString(transactionData.payload.recipient.address),
    amount: transactionData.payload.amount,
    senderKey: SENDER_KEY,
    network: NETWORK,
    memo: transactionData.payload.memo.content.split("\x00")[0],
    nonce: transactionData.auth.spendingCondition.nonce,
    fee: transactionData.auth.spendingCondition.fee + BigInt(FEE_INCREMENT),
    anchormode: transactionData.anchorMode,
  };

  const transaction = await makeSTXTokenTransfer(txOptions);

  // serializing the transaction
  const serializedTx = transaction.serialize().toString("hex");

  //converting the string to Uint8Array
  const serializedArray = Uint8Array.from(serializedTx.split(","));

  //sending the raw transaction
  const rawTxResponse = await sendRawTransaction(serializedArray);

  console.log(rawTxResponse);
};
