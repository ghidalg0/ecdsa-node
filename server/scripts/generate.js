const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.secp256k1.utils.randomPrivateKey();

console.log(toHex(privateKey));

const publicKey = secp.secp256k1.getPublicKey(privateKey);

console.log(toHex(publicKey));

// const signature = secp.secp256k1.sign("", toHex(privateKey), {
//   recovery: true,
// });

// console.log(signature);

// const extractedPublicKey = secp.secp256k1.getPublicKey(signature);

// console.log(extractedPublicKey);
