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
        alert("Paid successful");
        setBalance(newBalance)
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