// program to mint tokens to any public key in the devnet

const { createMint } = require("@solana/spl-token");
const {
  Keypair,
  Connection,
  clusterApiUrl,
  TOKEN_PROGRAM_ID,
} = require("@solana/web3.js");

const payer = Keypair.fromSecretKey(
  Uint8Array.from([
    90, 236, 173, 168, 17, 206, 206, 142, 192, 191, 223, 102, 134, 33, 167, 185,
    250, 181, 20, 109, 197, 241, 200, 210, 112, 173, 156, 43, 103, 114, 142,
    245, 196, 150, 199, 75, 169, 10, 0, 213, 6, 121, 84, 200, 163, 214, 120,
    232, 75, 137, 185, 175, 164, 127, 89, 175, 110, 90, 27, 68, 2, 67, 131, 50,
  ])
);

const mintAthority = payer;

const connection = new Connection("https://api.devnet.solana.com");

async function createMintForToken(payer, mintAuthority) {
  const mint = await createMint(
    connection,
    payer,
    mintAuthority,
    null,
    6,
    TOKEN_PROGRAM_ID
  );
  console.log("Mint created at", mint.toBase58());
  return mint;
}

async function main() {
  const mint = await createMintForToken(payer, mintAthority.publicKey);
}

main();
