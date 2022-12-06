class Card {
    #PIN;
    #account;

    constructor(cardNum, newPIN){
        this.cardNum = cardNum;
        this.#PIN = newPIN;
        this.#account = [];
        this.selectedAccount = 0;
    }

    getPIN(){
        return this.#PIN;
    }
    
    // SECTION - BALANCE
    getBalance(){
        return this.#account[this.selectedAccount];
    }

    deposit(howMuch){
        return this.#account[this.selectedAccount] += howMuch;
    }

    withdraw(howMuch){
        return this.#account[this.selectedAccount] -= howMuch;
    }

    // SECTION - ACCOUNT
    showAccount(){
        return this.#account;
    }

    selectAccount(accountNum){
        return this.selectedAccount = accountNum;
    }

    createAccount(){
        return this.#account.push(0);
    }

    // SECTION - SELECTED ACCOUNT
    getSelectedAccount(){
        return this.selectedAccount;
    }

    setSelectedAccount(userChoice){
        return this.selectedAccount = userChoice
    }
}

class User {
    constructor(inputCardNum){
        this.inputCardNum = inputCardNum;
    }

    getCardNum(){
        return this.inputCardNum;
    }

}

// TEST DB SETTING
const test_card1 = new Card('123412341234', 1234);
test_card1.createAccount();
test_card1.createAccount();
const test_card2 = new Card('567856785678', 5678);
const db = new Map();
db.set('123412341234', test_card1);
db.set('567856785678', test_card2);

let user, card;


export function verifyCard(cardNum){
    user = new User(cardNum);

    const dbCard = db.get(user.getCardNum());
    if(!dbCard) {
        return false;
    }
    
    card = dbCard;
    return true;
}

export function verifyPIN(inputPIN){
    return card.getPIN() === inputPIN ? true : false;
}

export function showAccount(){
    return card.showAccount();
}

export function selectAccount(userChoice){
    return card.setSelectedAccount(userChoice)
}

export function checkBalance(){
    return card.getBalance();
}

export function deposit(howMuch){
    card.deposit(howMuch);
    return card.getBalance();
}

export function withdraw(howMuch){
    if(card.getBalance() >= howMuch){
        card.withdraw(howMuch);
        return card.getBalance();
    } else {
        return false;
    }
}