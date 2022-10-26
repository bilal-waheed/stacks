import { buildTransferNameTx } from "@stacks/bns";
import { publicKeyToString, pubKeyfromPrivKey } from "@stacks/transactions";

import {
  BNS_NAME,
  BNS_NAMESPACE,
  ZONE_FILE,
  NAME_RECIPIENT,
  SENDER_KEY,
} from "../constants.js";
import { sendSignedTransaction, resolveNetworkFromCLI } from "../common.js";

export const nameTransfer = async () => {
  //get public key from private key
  const publicKey = publicKeyToString(pubKeyfromPrivKey(SENDER_KEY));

  //resolve network from cli input
  const network = await resolveNetworkFromCLI();

  const unsignedTx = await buildTransferNameTx({
    fullyQualifiedName: `${BNS_NAME}.${BNS_NAMESPACE}`,
    newOwnerAddress: NAME_RECIPIENT,
    zonefile: ZONE_FILE,
    publicKey,
    network,
  });

  // sign and broadcast tx
  const txResponse = await sendSignedTransaction(
    unsignedTx,
    Buffer.from(ZONE_FILE)
  );

  console.log(txResponse);
};
