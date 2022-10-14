import { stxTokenTransfer } from "./stxTokenTransfer.js";
import { rbfTransaction } from "./rbfTransaction.js";
import { dustTransaction } from "./dustTransaction.js";

(async () => {
  const action = process.argv[2];

  switch (action) {
    case "stxTokenTransfer":
      stxTokenTransfer();
      break;

    case "rbfTransaction":
      rbfTransaction();
      break;

    case "dustTransaction":
      dustTransaction();
      break;

    default:
      console.log("Please enter the transaction-type as first argument.");
  }
})();
