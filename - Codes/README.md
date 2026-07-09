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


## Transactions

```
// Transaction History - 4 Simple Steps

// Step 1: Select the transaction history container
const history = document.getElementById("history-container");

// Step 2: Create a new history item
const newHistory = document.createElement("div");

// Step 3: Add the transaction details
newHistory.innerHTML = `
    <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
        Money Added Successfully from ${bankAcount}, Acc No: ${accNo} at ${new Date()}
    </div>
`;

// Step 4: Append the new history item to the container
history.appendChild(newHistory);
```




##  Paybill history


```
            <div
                class="relative mx-auto flex items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">

                <!-- Left Accent Border -->
                <div
                    class="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600">
                </div>

                <!-- Left Side -->
                <div class="flex items-center gap-4 pl-2">

                    <!-- Icon -->
                    <div
                        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-base-300 bg-base-200">
                        <img class="h-8 w-8 object-contain" src="./assets/opt-1.png" alt="Electricity Bill">
                    </div>

                    <!-- Content -->
                    <div>
                        <h3 class="font-semibold text-base text-neutral-800">
                            Electricity Bill
                        </h3>

                        <p class="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                            <span>Today</span>
                            <span class="h-1 w-1 rounded-full bg-neutral-400"></span>
                            <span>09:45 AM</span>
                        </p>
                    </div>

                </div>

                <!-- Right Side -->
                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-500 transition hover:bg-base-200 hover:text-primary">
                    <i class="fa-solid fa-ellipsis-vertical text-lg"></i>
                </button>

            </div>

            <!-- Paybill history card - end ✅ -->
```


