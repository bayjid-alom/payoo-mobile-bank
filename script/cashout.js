// ✔️ Best Practice (Recommended)

document.getElementById("cashout-btn").addEventListener("click", function () {
    // 01. get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    // 02. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 03. get current balance, validate, convert to number (innerText)
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("New balance - ", balance)

    // 04. Calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance)
    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }

    // 05. get the pin an verify
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        alert("Cashout Successfully");
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
        return;
    }


})
















// ❗ Right Way (Not Recommended)

// document.getElementById("cashout-btn")
//     .addEventListener("click", function () {

//         // 01. get the agent number and validate
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = cashoutNumberInput.value;
//         if (cashoutNumber.length != 11) {
//             alert("Invalid Agent Number");
//             return;
//         }


//         // 02. get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         const cashoutAmount = cashoutAmountInput.value;


//         // 03. get current balance, validate, convert to number
//         const balanceElement = document.getElementById("balance");
//         const balance = balanceElement.innerText;


//         // 04. Calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         if (newBalance < 0) {
//             alert("Invalid Amount!");
//             return;
//         }


//         // 05. get the pin an verify
//         const cashoutPinInput = document.getElementById("cashout-pin");
//         const cashoutPin = cashoutPinInput.value;
//         if (cashoutPin === "1234") {
//             // 05-01. true::: show and alert  > set balance
//             alert("Cashout successful")
//             balanceElement.innerText = newBalance;   //...why?
//         }

//         else {
//             // 05-01. false::: show an error alert > return
//             alert("Invalid pin");
//             return;
//         }
//     })



// const cashoutSec = document.getElementById("cashout");
// cashoutSec.style.display = "none"
// cashoutSec.style.transition = .3;

// document.querySelector(".cashout-button").addEventListener("click", function () {
//     cashoutSec.style.display = "block"
// })


