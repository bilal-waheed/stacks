import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  sponsorTransaction,
} from "@stacks/transactions";

import { createTxOptions } from "../common.js";
import { FEE, SPONSOR_KEY, SPONSOR_NONCE } from "../constants.js";

export const sponsoredTransaction = async () => {
  // creating the txOptions object
  const txOptions = await createTxOptions();

  delete txOptions.fee; // FEE is added in the sponsorOptions
  txOptions.sponsored = true;

  const transaction = await makeSTXTokenTransfer(txOptions);

  const sponsorOptions = {
    transaction,
    sponsorPrivateKey: SPONSOR_KEY,
    fee: BigInt(FEE),
    sponsorNonce: BigInt(SPONSOR_NONCE),
  };

  // sponsoring the transaction
  const sponsoredTx = await sponsorTransaction(sponsorOptions);

  const broadcastResponse = await broadcastTransaction(sponsoredTx);
  console.log(broadcastResponse);
};
