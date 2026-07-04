> # **Thinking Process** ```Functionality```

## ✔️ Login Page
- Number input → maxlength="11" (Limits the mobile number to 11 digits.)
- Password input → maxlength="4" (Restricts the PIN/password to 4 digits.)

> ### when press ```login button```

```
- 01. get the mobile number
- 02. get the pin input
- 03. match pin & mobile number
- 03-01. true::::>> alert> homepage

- window.location.replace("/home.html") - 
- window.location.assign("/home.html")

- 03-02. false:::>> alert> return

```

### To set Default number 
- নাম্বার ইনপুটে(Attribute) value="01648771835"
- [Password : Same process]

## replace() VS assing()
- window.location.assign("/home.html")
- নতুন page-এ যায়।
- History-তে আগের page থাকে।
- ✅ Back করলে আগের page-এ ফেরা যায়।

<br>

- window.location.replace("/home.html")
- নতুন page-এ যায়।
- History থেকে আগের page মুছে যায়।
- ❌ Back করলে আগের page-এ ফেরা যায় না।

## ✔️ Home Page 

- Find similar form like login form 

> ### **Cashout: Functionality idea**

```
01. get the agent number and validate
02. get the amount, validate, convert to number
03. get current balance, validate, convert to number
04. Calculate new balance
05. get the pin an verify
05-01. true::: show and alert  > set balance
05-01. false::: show an error alert > return
```


### 📝 string to Number()

- input.value এবং element.innerText সবসময় String রিটার্ন করে।
- তাই গাণিতিক হিসাব করার আগে Number() দিয়ে Number-এ convert করতে হবে।
- নাহলে প্রত্যাশিত numeric operation নাও হতে পারে।
- const newBalance = Number(balance) - Number(cashoutAmount);

```
নতুন ব্যালেন্স যেন নেগেটিভ নাম্বার না হয় - এজন্য ঃ

if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
}
```

### To fixed Navbar :
```
- Raw CSS3 :

header {
    position: sticky;
    top: 0;
    z-index: 999;
    background: white;
}
```
```
🔥 Tailwind + daisyUI:

<header class=" sticky top-0 z-50 bg-base-200">
```

## 🧠 Thinking Process (Cash Out Functionality)

### Step 1: Get Agent Number

* Get the agent number from the input field.
* Validate that it contains exactly **11 digits**.
* If invalid, show an alert and stop execution.

### Step 2: Get Cash Out Amount

* Read the cash out amount from the input.
* This value is initially a **String**.

### Step 3: Get Current Balance

* Get the current balance from the UI (`innerText`).
* `innerText` returns a **String**.

### Step 4: Convert & Calculate

* Convert both balance and cash out amount to **Number**.
* Calculate the new balance:

  ```js
  newBalance = balance - cashoutAmount;
  ```
* If the new balance becomes less than `0`, show an alert and stop execution.

### Step 5: Verify PIN

* Get the PIN from the input field.
* Check whether it matches the correct PIN (`1234`).

### Step 6: Update Balance

* If the PIN is correct:

  * Show a success alert.
  * Update the balance in the UI using:

    ```js
    balanceElement.innerText = newBalance;
    ```

### Step 7: Handle Invalid PIN

* If the PIN is incorrect:

  * Show an error alert.
  * Stop execution. 

<br>


> **whitespace-nowrap → টেক্সটের লাইন ব্রেক (Wrapping) বন্ধ করে। ফলে জায়গা কম হলেও টেক্সট নতুন লাইনে যায় না, বরং এক লাইনে থাকে।**




  ## ✔️ ```Machine``` **Common Function** 
    - To avoid code repeat. ✔️
  ``` machine.js```
  - connect with **home.html** 

```
  (id) - লিখতে হবে ।

  function getValueFromTheInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
```


 ## ✔️ ```Machine``` **getBalance()** - Another function
 - যেহেতু এমাউন্ট উঠানামা করবে সবসময়।


 > ## ✔️ **Home Page > Add Money Section**
- select এ option এর value লিখতে হবে ।
 - <option value="DBBL">DBBL</option>
 - ```add-money.js```
 
 ```
 Maintain Serial is must!!

<script src="script/machine.js"></script>
<script src="script/addMoney.js"></script>
<script src="script/cashout.js"></script>
```

-Bank account "Select A Bank" হলে alert! দেখাতে হবে ।
```
<option disabled selected>Select bank</option>
```


```
Make it Dynamic : 🔥

if (pin === "1234") {
    alert(`
    Money Added Successfully! from ${bankAcount}
    at ${new Date()}
    `);
    setBalance(newBalance)
};
```


## ✔️ Toggle Sections **Thinking Process**


* Function call → Target section **ID** pass.
* Select all sections.
* Hide all sections using `classList.add("hidden")`.
* Show the target section using `classList.remove("hidden")`.
* (Also hidden by class in html file)

### Toggle করার ২টি উপায়

* **`onclick`** → HTML থেকে function call।
* **`addEventListener()`** → JavaScript থেকে click event handle করে function call।


```
<button onclick="showOnly('add-money')">Add Money</button>
<button onclick="showOnly('cashout')">Cashout</button>

function showOnly(id) {
    const cashout = document.getElementById("cashout");
    const addmoney = document.getElementById("add-money");

    // Step 1: Hide all available sections
    cashout.classList.add("hidden");
    addmoney.classList.add("hidden");

    // Step 2: Display only the requested section
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
```
<br>

## Another way : by Using **addEventListener()**

```

document
    .getElementById("add-money-btn")
    .addEventListener("click", function () {
        showOnly("add-money");
    });

document
    .getElementById("cashout-btn")
    .addEventListener("click", function () {
        showOnly("cashout");
    });
```


## ✔️ Transaction History (Bottom of `home.html`)

* Make a `history-container`.
* Keep it empty at first.
* After a successful transaction (Add Money / Cash Out), add a new history card.
* Call the history code after `setBalance()`.
* Find the `history-container`.
* Create a new `div`.
* Write the history text using `innerHTML`.
* Add the new `div` to the container using `appendChild()`.
* Every successful transaction will add a new history card.




###  Transaction History - 4 Simple Steps

```
// Step 1: Select the transaction history container
const history = document.getElementById("history-container");

// Step 2: Create a new history item
const newHistory = document.createElement("div");

// Step 3: Add the transaction details
newHistory.innerHTML = `
    <div class="transaction-card rounded-md border border-primary/30 p-5 bg-base-100">
        Money Added Successfully from ${bankAcount}, Acc No: ${accNo} at ${new Date()}
    </div>
`;

// Step 4: Append the new history item to the container
history.appendChild(newHistory);

```















 <br><br><br><br>
---

> # **Note:** ```DaisyUI```


### DaisyUI + tailwindCSS connect
```
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

## theme
```
<html lang="en" data-theme="dark">
```
## Adding all themes
```
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
```

class hover korle suggestion asle bujhbo tailwind theke asache, 
na asle bujhbo daisyUI theke asche

## 📝 DaisyUI `btn` Notes

```
DaisyUI-এর `btn` ক্লাসে ডিফল্টভাবে `display: flex` থাকে।
তাই icon এবং text উল্লম্বভাবে সাজাতে `flex-col` ব্যবহার করতে হবে।

এছাড়া `btn`-এর একটি fixed height থাকে।
প্রয়োজনে `h-full` ব্যবহার করে height override করা যায়।

```



## 💡 Tailwind vs DaisyUI Class চিনার উপায়

- VS Code-এ কোনো class লিখলে যদি IntelliSense/Suggestion আসে,
- তাহলে সেটি সাধারণত Tailwind CSS utility class।
- 
- আর যদি class-এর suggestion না আসে,
- কিন্তু class কাজ করে (যেমন: btn, card, navbar, hero),
- তাহলে সেটি সাধারণত DaisyUI component class।




