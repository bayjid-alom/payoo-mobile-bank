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
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}




//  id >> hide all >> show an id
// function showOnly(id) {
//     const addmoney = document.getElementById("add-money");
//     const cashout = document.getElementById("cashout");

//     // console.log(`add Money - ${addmoney} , Cashout - ${cashout}`)

//     // 1. hide all
//     addmoney.classList.add("hidden");
//     cashout.classList.add("hidden")

//     // 2. id wala element ta ke show koro
//     const selected = document.getElementById(id);
//     selected.classList.remove("hidden")
// }



function showOnly(id){
    const cashout = document.getElementById("cashout");
    const addmoney = document.getElementById("add-money");

    // 1. hide all
    cashout.classList.add("hidden");
    addmoney.classList.add("hidden");

    // 2. show that which is clicked
    const selected = document.getElementById(id)
    selected.classList.remove("hidden")
}
