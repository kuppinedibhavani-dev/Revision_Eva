function createBankAccount(initialBalance=0){
    let balance=initialBalance;
    const transactionHistory=[];

    function deposit(amount){
        if(amount<=0){
            return "Error:Deposit amount must be positive.";
        }
        balance+=amount;
        transactionHistory.push({
            type:"DEPOSIT",
            amount,
            balance,
            date:new Date()
        });
        return balance;
    }
    function withdraw(amount){
        if(amount<=0){
        return "Error:Withdrawal amount must be positive.";
    }
    if(amount>balance){
        return "Error:Insufficient funds."
    }
   
    balance-=amount;
    transactionHistory.push({
        type:"WITHDRAW",
        amount,
        balance,
        date:new Date()
    });
    return balance;
}
function getBalance(){
    return balance;
}
function getTransactionHistory(){
    return[...transactionHistory];
}
return{
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory
}
};
export default createBankAccount;