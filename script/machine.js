// console.log("Machine Connected.")

// Machine id --> input value (ইনপুট ফিল্ডের জন্য)
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value)
    // value return করতে হবে ।
    return value;
}



// Machine -> balance (শুরুতে যা থাকবে)
function getBalance(id) {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    // নাম্বারে কনভার্ট করে রিটার্ন করতে হবে ।
    console.log("Current balance ", Number(balance))
    return Number(balance);
}



// Machine value --> set Balance (To avoid repeated code for set Balance)
// এখানে একটা ভেল্যু পাঠানো হবে তাই। (Nothing return it.)
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}
