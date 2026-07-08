document.getElementById("transfer-btn").addEventListener("click", function () {

    const number = getValueFromInput("transfer-number");
    if (number.length != 11) {
        alert("Invalid Number");
        return;
    }

    const balance = getBalance("balance");
    const amount = getValueFromInput("transfer-amount");

    if (amount == "") {
        alert("Please enter an amount!");
        return;
    }


    const newBalance = balance - Number(amount);
    if (newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }


    const pin = getValueFromInput("transfer-pin");
    if (pin === "1234") {
        alert(`Transfer Money Successful! Amount: $${amount} at ${new Date}`);
        setBalance(newBalance)



        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div")

        // newHistory.innerHTML = `
        // <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
        //       Transfer Money Successful! Amount: $${amount} at ${new Date}
        // </div>
        // `;

        newHistory.innerHTML = `
<div class="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-base-100 via-emerald-50/30 to-green-100/20 p-5 shadow-lg transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.18)]">

    <!-- Left Accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600"></div>

    <div class="flex items-center gap-4">

        <!-- Transfer Icon -->
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H9m8-6H3" />
            </svg>
        </div>

        <!-- Message -->
        <div class="flex-1">
            <h3 class="font-semibold text-emerald-500">
                Transfer Money
            </h3>

            <p class="mt-1 text-sm text-base-content/80">
                <span class="font-medium">Transfer Money Successful!</span>
                Amount:
                <span class="font-bold text-base-content">$${amount}</span>
                at
                <span class="text-base-content/60">${new Date().toLocaleString()}</span>
            </p>
        </div>

    </div>
</div>
`;

        history.appendChild(newHistory)
    }

    else {
        alert("Invalid Pin");
        return;
    }

})