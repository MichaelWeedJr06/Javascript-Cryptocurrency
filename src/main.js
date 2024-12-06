const { Blockchain, Transaction } = require("./blockchain");

let DuckCoin = new Blockchain();

DuckCoin.createTransaction(new Transaction("address1", "address2", 100));
DuckCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
DuckCoin.minePendingTransactions("mikes-address");

console.log(
  "\nBalance of mike is",
  DuckCoin.getBalanceOfAddress("mikes-address")
);

console.log("\n Starting the miner again..");
DuckCoin.minePendingTransactions("mikes-address");
console.log(
  "\nBalance of mike is",
  DuckCoin.getBalanceOfAddress("mikes-address")
);
