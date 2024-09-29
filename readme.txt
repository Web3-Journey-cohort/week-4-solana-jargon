There are three types of accounts in solana --> 

1. only have lamports 
2. Data --> have lamports
3. programs --> have lamports and data

what are programs ?
programs are smart contracts that run on the blockchain

what is rent ?
rent is the cost of running a program on the blockchain --> it is paid by the user
the rent is paid in lamports
the rent is paid for every instruction that is executed
if the user does not pay the rent, the program will be terminated

the rent is exempted if the account has some specific amount of lamports and is returned to the user once the program is terminated
for example, if the account has 100 lamports and the program is terminated, the user will get 100 lamports back
this is called the exemption

what is mainnet , devnet and testnet ?
they are like develop , staging and production enviroments ..


solana CLI --> 

solana-keygen --> generate a new keypair
solana-test-validator --> run a local validator
solana-test-validator --reset --> reset the local validator
solana address --> get the public key of the account
solana balance --> get the balance of the account
solana airdrop <amount> --> airdrop <amount> lamports to the account
solana config set --url --> set the url of the validator
solana config get --> get the url of the validator
spl-token create-token --> create a token
spl-token create-account --> create a token account
spl-token mint --> mint tokens to the token account
spl-token balance --> get the balance of the token account
spl-token transfer --> transfer tokens from the token account to another token account
spl-token balance --> get the balance of the token account
spl-token burn --> burn tokens from the token account
spl-token close --> close the token account
spl-token transfer-checked --> transfer tokens from the token account to another token account and check the balance of the token account
spl-token balance --> get the balance of the token account
spl-token burn-checked --> burn tokens from the token account and check the balance of the token account  

for more slides ?

https://petal-estimate-4e9.notion.site/Solana-Jargon-Programming-model-Tokens-45937002d4c24cda9d02fc02a6dedc1c