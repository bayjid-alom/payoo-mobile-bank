document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1. get bank account  
    const bankAcount = getValueFromInput("add-money-bank");
    if (bankAcount == "Select bank") {
        alert("Please select a bank");
        return;
    }

    // 2. get bank account number
    const accNo = getValueFromInput("add-money-number");
    if (accNo.length != 11) {
        alert("Invalid Account Number");
        return;
    }

    // 3. get amount 
    // যা এড করা হবে ।
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();

    // ক্যাশআউট/এড মানি করার পর যা থাকবে ।
    // (current + addedAmount)
    const newBalance = currentBalance + Number(amount);
    console.log("Balance After Added :", newBalance)


    // 4. Pin verify and validate
    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234") {
        // alert("Add Money Success");
        alert(`
        Money Added Success from ${bankAcount} , acc-no ${accNo} at ${new Date()}
            `);

        // setBalance(যা পূর্বে ছিল + এডেড এমাউন্ট)
        setBalance(newBalance)



        // =========History=========================
        // 01. history-container ke niye aste hobe
        const history = document.getElementById("history-container");

        // 02. new div create
        const newHistory = document.createElement("div")

        // 03. new div innerHTML likhbo
        // newHistory.innerHTML = `
        // <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
        //       Money Added Success from ${bankAcount} , acc-no ${accNo} at ${new Date()}
        // </div>
        // `;

        newHistory.innerHTML = `
<div class="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-base-100 via-emerald-50/30 to-green-100/20 p-5 shadow-lg transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.18)]">

    <!-- Left Accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600"></div>

    <div class="flex items-center gap-4">

        <!-- Add Money Icon -->
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 5v14M5 12h14" />
            </svg>
        </div>

        <!-- Transaction Message -->
        <div class="flex-1">
          

            <p class="mt-1 text-sm text-base-content/80">
                <span class="font-medium text-emerald-500">
                    Money Added Successfully!
                </span>
                from
                <span class="font-semibold">${bankAcount}</span>,
                A/C No:
                <span class="font-semibold">${accNo}</span>
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