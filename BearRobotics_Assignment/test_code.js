import {verifyCard, verifyPIN, showAccount, selectAccount, deposit, withdraw, finish} from "./server.js";

function main(req){
    const inputCardNum = req.cardNum
    const cardIsRight = verifyCard(inputCardNum)
    console.log("=======TEST verifyCard=========")
    console.log(cardIsRight);
    console.log()

    const inputPIN = 1234;
    let PINisRight = verifyPIN(inputPIN);
    console.log("========TEST verifyPIN==========")
    console.log(PINisRight);
    console.log()

    console.log("========TEST showAccount==========")
    console.log(showAccount());
    console.log()
    
    console.log("========TEST selectAccount==========")
    console.log(selectAccount(1));
    console.log()

    console.log("=========After Deposit==========")
    console.log(deposit(100));
    console.log()

    console.log("=========After Withdraw=========")
    console.log(withdraw(50));
    console.log()

    console.log("=========TEST finish=============")
    console.log(finish())
    console.log()
}
main({cardNum: '123412341234'})
main({cardNum: '787912315748'})