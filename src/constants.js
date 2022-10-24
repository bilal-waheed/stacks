//all-case exports
export const CLI_ACTION = process.argv[2];
export const NETWORK = process.argv[3];
export const SENDER_KEY = process.argv[5];

// stx-specific exports
export const RECIPIENT = process.argv[4];
export const AMOUNT = process.argv[6];
export const FEE = process.argv[7] ? process.argv[7] : null;
export const NONCE = process.argv[8] ? process.argv[8] : null;

// sponsor-specific exports
export const SPONSOR_KEY = process.argv[9];
export const SPONSOR_NONCE = process.argv[10] ? process.argv[10] : null;

// rbf-specific exports
export const TXID = process.argv[4];
export const FEE_INCREMENT = process.argv[6];

// bns-specific exports
export const SALT = process.argv[4];
export const BNS_NAME = process.argv[6];
export const BNS_NAMESPACE = process.argv[7] ? process.argv[7] : null;
export const STX_TO_BURN = process.argv[8] ? process.argv[8] : null;

// bns-name-regsiter specific export
export const ZONE_FILE = process.argv[8] ? process.argv[8] : null;

// bns-name-transfer specific exports
export const NAME_RECIPIENT = process.argv[4];

// * 4 and 6 indexes will have different values for RBF transactions.
// ... only TXID/FEE_INCREMENT will be used in rbf transacations
// and NOT RECIPIENT/AMOUNT
