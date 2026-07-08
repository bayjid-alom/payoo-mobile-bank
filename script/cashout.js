// ✔️ Best Practice (Recommended)

document.getElementById("cashout-btn").addEventListener("click", function () {
    // 01. get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Number");
        return;
    }

    // 02. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 03. get current balance, validate, convert to number (innerText)
    const currentBalance = getBalance("balance");

    // Normally - 01
    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log("New balance - ", balance)


    // 04. Calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log("Remaining Balance :", newBalance)
    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }

    // 05. get the pin an verify
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        // alert("Cashout Successfully");

        alert(`Cash Out Successful! Amount: $${cashoutAmount} at ${new Date}`);
        // balanceElement.innerText = newBalance;
        // document.getElementById("balance").innerText = currentBalance;
        // ফাংশন কল - নতুন যে ব্যালেন্স সেটা প্যারামিটার বা ভেল্যু হিসেবে পাঠাতে হবে।
        setBalance(newBalance)


        // =========History=========================
        // 01. history-container ke niye aste hobe
        const history = document.getElementById("history-container");

        // 02. new div create
        const newHistory = document.createElement("div")

        // 03. new div innerHTML likhbo
        newHistory.innerHTML = `
<div class="relative overflow-hidden rounded-2xl border border-red-400/20 bg-gradient-to-br from-base-100 via-red-50/30 to-rose-100/20 p-5 shadow-lg transition-all duration-300 hover:border-red-400/40 hover:shadow-[0_10px_35px_rgba(239,68,68,0.18)]">

    <!-- Left Accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-400 via-rose-500 to-red-600"></div>

    <div class="flex items-center gap-4">

        <!-- Cash Out Icon -->
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-error text-error-content shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 19V5m0 0l-5 5m5-5l5 5" />
            </svg>
        </div>

        <!-- Transaction Message -->
        <div class="flex-1">
            

            <p class="mt-1 text-sm text-base-content/80">
                <span class="font-medium text-red-500">
                    Cash Out Successful!
                </span>
                Amount:
                <span class="font-semibold">$${cashoutAmount}</span>
                at
                <span class="text-base-content/60">${new Date().toLocaleString()}</span>
            </p>
        </div>

    </div>
</div>
`;

        // 04. append child in container
        history.appendChild(newHistory)
    }
    else {
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


