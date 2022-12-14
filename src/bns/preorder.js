import { buildPreorderNameTx } from "@stacks/bns";
import { publicKeyToString, pubKeyfromPrivKey } from "@stacks/transactions";

import {
  BNS_NAME,
  BNS_NAMESPACE,
  STX_TO_BURN,
  SALT,
  SENDER_KEY,
} from "../constants.js";
import { sendSignedTransaction, resolveNetworkFromCLI } from "../common.js";

export const namePreorder = async () => {
  //get public key from private key
  const publicKey = publicKeyToString(pubKeyfromPrivKey(SENDER_KEY));

  //resolve network from cli input
  const network = await resolveNetworkFromCLI();

  const unsignedTx = await buildPreorderNameTx({
    fullyQualifiedName: `${BNS_NAME}.${BNS_NAMESPACE}`,
    salt: SALT,
    stxToBurn: BigInt(STX_TO_BURN),
    publicKey,
    network,
  });

  // sign and broadcast tx
  const txResponse = await sendSignedTransaction(unsignedTx);

  console.log(txResponse);
};
