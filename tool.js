import { stxTokenTransfer } from "./src/stxTokenTransfer.js";
import { rbfTransaction } from "./src/rbfTransaction.js";
import { dustTransaction } from "./src/dustTransaction.js";
import { sponsoredTransaction } from "./src/sponsoredTransaction.js";
import { CLI_ACTION } from "./src/constants.js";

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

    default:
      console.log("Please enter the transaction-type as first argument.");
  }
})();
