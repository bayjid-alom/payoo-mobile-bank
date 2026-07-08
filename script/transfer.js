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

        newHistory.innerHTML = `
        <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
              Transfer Money Successful! Amount: $${amount} at ${new Date}
        </div>
        `;

        history.appendChild(newHistory)
    }

    else {
        alert("Invalid Pin");
        return;
    }

})