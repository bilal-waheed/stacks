import { createTxOptions, sendTransaction } from "../common.js";

export const stxTokenTransfer = async () => {
  const txOptions = await createTxOptions();

  // broadcasting transaction
  const response = await sendTransaction(txOptions);

  console.log(response);
};
