document.getElementById("pay-bill-btn").addEventListener("click", function () {
    const payFor = getValueFromInput("select-service-input");

    if (payFor == "Select one") {
        alert("Please select a service");
        return;
    }

    const billerAccount = getValueFromInput("pay-bill-number")
    if (billerAccount.length != 11) {
        alert("Invalid biller account number!");
        return;
    }


    const balance = getBalance("balance")
    const paidAmount = getValueFromInput("pay-bill-amount");
    if (paidAmount == "") {
        alert("Please enter an amount!");
        return;
    }

    const newBalance = balance - Number(paidAmount)
    if (newBalance < 0) {
        alert("Invalid amount!");
        return;
    }


    const pin = getValueFromInput("pay-bill-pin")

    if (pin === "1234") {
        alert(`Payment successful! Your ${payFor} bill has been paid, and the amount of $${paidAmount} has been deducted from your account.`);
        setBalance(newBalance)

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div")

        newHistory.innerHTML = `
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
                            ${payFor}
                        </h3>

                        <p class="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                            <span>Today</span>
                            <span class="h-1 w-1 rounded-full bg-neutral-400"></span>
                            <span>${new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</span>

                            <span class="h-1 w-1 rounded-full bg-neutral-400"></span>
                            <span> Paid : $${paidAmount}</span>
                        </p>
                    </div>

                </div>

                <!-- Right Side -->
                <button
                    class="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-500 transition hover:bg-base-200 hover:text-primary">
                    <i class="fa-solid fa-ellipsis-vertical text-lg"></i>
                </button>

</div>
`;

        history.appendChild(newHistory)

    }

    else if (pin == "") {
        alert("Please enter your pin!");
        return;
    }

    else if (pin.length < 4) {
        alert("Enter atleast 4 digit pin!")
    }

    else {
        alert("Entered incorrect pin!");
        return;
    }



})