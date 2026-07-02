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
            Money Added Successfully! from ${bankAcount}
            at ${new Date()}

            `);

        // setBalance(যা পূর্বে ছিল + এডেড এমাউন্ট)
        setBalance(newBalance)
    }
    else {
        alert("Invalid Pin");
        return;
    }


})