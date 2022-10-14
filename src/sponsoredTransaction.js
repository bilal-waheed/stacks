import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  sponsorTransaction,
} from "@stacks/transactions";

import { createTxOptions } from "./common.js";

export const sponsoredTransaction = async () => {
  // creating the txOptions object
  const txOptions = await createTxOptions();
  delete txOptions.fee;
  txOptions.sponsored = true;

  const transaction = await makeSTXTokenTransfer(txOptions);

  const sponsorOptions = {
    transaction,
    sponsorPrivateKey: process.argv[9],
    fee: process.argv[6],
    sponsorNonce: process.argv[10],
  };

  // sponsoring the transaction
  const sponsoredTx = await sponsorTransaction(sponsorOptions);

  const broadcastResponse = await broadcastTransaction(sponsoredTx);
  console.log(broadcastResponse);
};
