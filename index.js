import createBankAccount from "./Question1/bankAccount";
import createReateLimiter from "./Question2/rateLimiter";
import {mySetInterval,myClearInterval} from
    import runSequentialTasks from "./Question4/sequentialTaskRunner";
import createCountdown from "./Question5/countdownTimer";
const account=createBankAccount(100);
account.deposit(50);
account.withdraw(30);

console.log(account.getBalance());
console.log(account.getTransactionHistory());

const limiter=createReateLimiter(2,5000);
console.log(limiter());
console.log(limiter());
console.log(limiter());

const interval=mySetInterval(()=>{
    console.log("Running...");
},1000);
setTimeout(()=>{
    myClearInterval(interval);
},5000);

const tasks=[
    async()=>"Task 1 done",
    async()=>"Task 2 done",
    async()=>"Task 3 done"

];
runSequentialTasks(tasks,2000)
.then(console.log)
.catch(console.error);

createCountdown(
    5,(remaining)=>console.log("Remaining:",remaining),
    ()=>console.log("Countdown finished")
)