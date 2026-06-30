console.log("Machine Connected.")

// Machine id --> input value (ইনপুট ফিল্ডের জন্য)
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value)
    // value return করতে হবে ।
    return value;
}