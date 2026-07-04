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
        newHistory.innerHTML = `
        <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
              Money Added Success from ${bankAcount} , acc-no ${accNo} at ${new Date()}
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