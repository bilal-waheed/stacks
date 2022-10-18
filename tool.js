import { stxTokenTransfer } from "./src/transactions/stxTokenTransfer.js";
import { rbfTransaction } from "./src/transactions/rbfTransaction.js";
import { dustTransaction } from "./src/transactions/dustTransaction.js";
import { sponsoredTransaction } from "./src/transactions/sponsoredTransaction.js";
import { CLI_ACTION } from "./src/constants.js";
import { namePreorder } from "./src/bns/preorder.js";

(async () => {
  switch (CLI_ACTION) {
    case "stxTokenTransfer":
      stxTokenTransfer();
      break;

    case "rbfTransaction":
      rbfTransaction();
      break;

    case "dustTransaction":
      dustTransaction();
      break;

    case "sponsoredTransaction":
      sponsoredTransaction();
      break;

    case "namePreorder":
      namePreorder();
      break;

    default:
      console.log("Please enter the transaction-type as first argument.");
  }
})();
