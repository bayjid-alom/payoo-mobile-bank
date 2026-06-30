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



