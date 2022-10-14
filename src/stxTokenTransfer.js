import { createTxOptions, calcNonce, sendTransaction } from "./common.js";

export const stxTokenTransfer = async () => {
  const txOptions = await createTxOptions();

  // nonce from the CLI
  const [nonceFromCLI, nonceFromAddress] = await calcNonce();
  txOptions.nonce = nonceFromCLI || nonceFromAddress;

  // broadcasting transaction
  const response = await sendTransaction(txOptions);

  console.log(response);
};
