const createBankAccount=require("./bankAccount");
const account=createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());