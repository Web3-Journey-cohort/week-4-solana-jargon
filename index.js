// program to airdrop 1 sol to any public key in the devnet

const {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
} = require("@solana/web3.js");

const connection = new Connection("https://api.devnet.solana.com");

async function airdrop(publicKey, amount) {
  const airdropSignature = await connection.requestAirdrop(
    new PublicKey(publicKey),
    amount
  );

  await connection.confirmTransaction(airdropSignature); // Fix here: pass the signature directly
  return airdropSignature; // Return the signature to the caller
}

airdrop("ApVHEnd2X6V7sqeUVL7beniosQgfBjoEjXVha82LQ38P", LAMPORTS_PER_SOL)
  .then((signature) => {
    console.log("Airdrop signature:", signature);
  })
  .catch((err) => {
    console.error("Airdrop failed:", err);
  });
