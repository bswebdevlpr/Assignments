# BearRobotics_Assignment  
## Basic Algorithm
<img src="https://user-images.githubusercontent.com/92581635/205820170-a78164ce-4b66-4d13-b32b-693bbce27500.png" width="500" height="1000"/>

## Structure
<img src="https://user-images.githubusercontent.com/92581635/205823061-3b60b729-7701-4e9c-858c-86e27c3d0caf.png" width="1000" height="400"/>


## APIs
  > ### verifyCard()
  Verifies which the input card number is on database.
  - ##### Syntax
    ```function verifyCard(cardNum: string)```
  - ##### Returns
    : boolean
  <br/>
   
  > ### verifyPIN()
  Verifies which the input PIN number is right.
  - ##### Syntax
    ```function verifyPIN(inputPIN: number)```
  - ##### Returns
    : boolean
  <br/>
    
  > ### showAccount()
  Shows the number of accounts stored in selected card. Each account is classified with its index.
  - ##### Syntax
    ```function showAccount()```
  - ##### Returns
    : number
  <br/>
    
  > ### selectAccount()
  Selects an account the user want to access.
  - ##### Syntax
    ```function selectAccount(userChoice: number)```
  - ##### Returns
    : number
  <br/>
  
  > ### checkBalance()
  Checks how much the balance is left.
  - ##### Syntax
    ```function checkBalance()```
  - ##### Returns
    : number
  <br/>
  
  > ### deposit()
  Deposits as much as the user wants. Returns the left balance.
  - ##### Syntax
    ```function deposit(howMuch: number)```
  - ##### Returns
    : number
  <br/>
  
  > ### withdraw()
  Withdraws as much as the user wants. Returns the left balance.
  - ##### Syntax
    ```function withdraw(howMuch: number)```
  - ##### Returns
    : number
  <br/>
  
  > ### finish()
  Finishes the process. 
  Initializes temporarily assigned variables and returns the result of initilization.
  - ##### Syntax
    ```function finish()```
  - ##### Returns
    : [boolean, boolean]
  <br/>
  
  
## Test
```
// /test_code.js
/*
Stored card data
- Card number: 123412341234
- PIN number: 1234
- Account list: [0, 0] // index: account number, value: balance
*/

main({cardNum: '123412341234'})

/*
=======TEST verifyCard()=========
true

========TEST verifyPIN()==========
// inputPIN=1234
true

========TEST showAccount()==========
[ 0, 0 ]

========TEST selectAccount()==========
// userChoice=1
1

=========After Deposit==========
100

=========After Withdraw=========
50
=========TEST finish=============
[ true, true ]



main({cardNum: '787912315748'})
=======TEST verifyCard=========
false

*/
```
If you want to test the code, run "test_code.js".
