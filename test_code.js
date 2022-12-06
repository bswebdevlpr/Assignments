import {verifyCard, verifyPIN, showAccount, selectAccount, deposit, withdraw} from "./server.js";

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

    console.log(showAccount());
    console.log(selectAccount(1));

    console.log("=========After Deposit==========")
    console.log(deposit(100));

    console.log("=========After Withdraw=========")
    console.log(withdraw(50));
}
main({cardNum: '123412341234'})
main({cardNum: 'X'})