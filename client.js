import {verifyCard, verifyPIN, showAccount, selectAccount, deposit, withdraw} from "./server.js";

/*
    ===WORKFLOW===
    1. 유저 카드입력
    2. 유저객체 생성
    3. 유저의 inputCardNum이 db내에 존재하는지 검증
        3.1) 없으면 return false
        4.1) 있으면 카드정보를 return
    4. 입력된 PIN 넘버가 등록된 PIN 넘버와 일치하는지 검증
        4.1) 일치하지 않으면 return false
    5. 계좌선택
*/

function main(req){
    const inputCardNum = req.cardNum
    const cardIsRight = verifyCard(inputCardNum)
    if(!cardIsRight){
        console.log("Invalid card number!")
        return false
    }
    console.log("=======TEST verifyCard=========")
    console.log(cardIsRight);
    console.log()

    const inputPIN = 1234;
    let PINisRight = verifyPIN(inputPIN);
    if(!PINisRight){
        console.log("Incorrect PIN number!")
        return false
    }
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