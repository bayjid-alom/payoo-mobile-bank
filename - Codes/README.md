> # **আলাদা আলাদা পেজের জন্য কোড ❗**

> ## ✔️ **Login** - ```(login.js & index.html)```

```
document.getElementById("login-btn").addEventListener("click", function () {
    // 01. get the mobile number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;


    // 02. get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin)


    // 03. match pin & mobile number
    if (contactNumber == "01648771835" && pin == "1234") {
        // 03-01. true::::>> alert> homepage
        alert("Login successful");
        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }

    else {
        // 03-02. false:::>> alert> return
        alert("Login failed!");
        return;
    }
})
```
 

 <br>


 > ## ✔️ Cashout - **(home.html & cashout.js)**

 ```
 document.getElementById("cashout-btn")
    .addEventListener("click", function () {

        // 01. get the agent number and validate
        const cashoutNumberInput = document.getElementById("cashout-number");
        const cashoutNumber = cashoutNumberInput.value;
        if (cashoutNumber.length != 11) {
            alert("Invalid Agent Number");
            return;
        }


        // 02. get the amount, validate, convert to number
        const cashoutAmountInput = document.getElementById("cashout-amount");
        const cashoutAmount = cashoutAmountInput.value;


        // 03. get current balance, validate, convert to number
        const balanceElement = document.getElementById("balance");
        const balance = balanceElement.innerText;


        // 04. Calculate new balance
        const newBalance = Number(balance) - Number(cashoutAmount);
        if (newBalance < 0) {
            alert("Invalid Amount!");
            return;
        }


        // 05. get the pin an verify
        const cashoutPinInput = document.getElementById("cashout-pin");
        const cashoutPin = cashoutPinInput.value;
        if (cashoutPin === "1234") {
            // 05-01. true::: show and alert  > set balance
            alert("Cashout successful")
            balanceElement.innerText = newBalance;   //...why?
        }

        else {
            // 05-01. false::: show an error alert > return
            alert("Invalid pin");
            return;
        }
    })



// const cashoutSec = document.getElementById("cashout");
// cashoutSec.style.display = "none"
// cashoutSec.style.transition = .3;

// document.querySelector(".cashout-button").addEventListener("click", function () {
//     cashoutSec.style.display = "block"
// })

```




 > ## ✔️ Toggle - **(machine.js)**

 ```
 function showOnly(id) {
    const cashout = document.getElementById("cashout");
    const addmoney = document.getElementById("add-money");

    // Step 1: Hide all available sections
    cashout.classList.add("hidden");
    addmoney.classList.add("hidden");

    // Step 2: Display only the requested section
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
```


