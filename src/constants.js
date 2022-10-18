export const CLI_ACTION = process.argv[2];

export const NETWORK = process.argv[3];
export const RECIPIENT = process.argv[4];
export const SENDER_KEY = process.argv[5];
export const AMOUNT = process.argv[6].includes(".")
  ? null
  : BigInt(process.argv[6]);
export const FEE = process.argv[7] ? BigInt(process.argv[7]) : null;
export const NONCE = process.argv[8] ? BigInt(process.argv[8]) : null;

// sponsor-specific exports
export const SPONSOR_KEY = process.argv[9];
export const SPONSOR_NONCE = process.argv[10] ? BigInt(process.argv[10]) : null;

// rbf-specific exports
export const TXID = process.argv[4];
export const FEE_INCREMENT = process.argv[6];

//bns-specific exports
export const SALT = process.argv[4];
export const BNS_NAME = process.argv[6];
export const STX_TO_BURN = process.argv[7] ? BigInt(process.argv[7]) : null;

// * 4 and 6 indexes will have different values for RBF transactions.
// ... only TXID/FEE_INCREMENT will be used in rbf transacations
// and NOT RECIPIENT/AMOUNT
