import { buildPreorderNameTx } from "@stacks/bns";
import { publicKeyToString, pubKeyfromPrivKey } from "@stacks/transactions";

import { BNS_NAME, STX_TO_BURN, SALT, SENDER_KEY } from "../constants.js";
import { sendSignedTransaction, resolveNetworkFromCLI } from "../common.js";

export const namePreorder = async () => {
  const publicKey = publicKeyToString(pubKeyfromPrivKey(SENDER_KEY));
  const network = await resolveNetworkFromCLI();

  const unsignedTx = await buildPreorderNameTx({
    fullyQualifiedName: BNS_NAME,
    salt: SALT,
    stxToBurn: STX_TO_BURN,
    publicKey,
    network,
  });

  const txResponse = await sendSignedTransaction(unsignedTx);

  console.log(txResponse);
};
