document.getElementById("get-bonus-btn").addEventListener("click", function () {

    const coupon = getValueFromInput("coupon-input");
    const balance = getBalance("balance");
    const newBalance = balance + Number(1250);


    if (coupon == "BA1835") {
        alert(`🎉 Congratulations! Coupon "${coupon}" has been applied successfully. $1,250 has been credited to your account.`);
        setBalance(newBalance)

        // Step - 01
        const history = document.getElementById("history-container");

        // Step - 02
        const newHistory = document.createElement("div")

        // Step - 03
        newHistory.innerHTML = `
<div class="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-base-100 via-amber-50/40 to-yellow-100/20 p-5 shadow-lg transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_10px_35px_rgba(245,158,11,0.18)]">

    <!-- Left Accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 via-yellow-500 to-orange-500"></div>

    <div class="flex items-center gap-4">

        <!-- Bonus Icon -->
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warning text-warning-content shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20 12v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7m16 0H4m16 0V9a2 2 0 00-2-2h-2.17a3 3 0 10-5.66 0H8a2 2 0 00-2 2v3m8-5v5" />
            </svg>
        </div>

        <!-- Transaction Message -->
        <div class="flex-1">
           

            <p class="mt-1 text-sm text-base-content/80">
                <span class="font-medium text-amber-600">
                    🎉 Congratulations!
                </span>
                Coupon
                <span class="font-semibold">"${coupon}"</span>
                has been applied successfully.
                <span class="font-semibold text-amber-600">$1,250</span>
                has been credited to your account.
            </p>

            <p class="mt-2 text-xs text-base-content/60">
                ${new Date().toLocaleString()}
            </p>
        </div>

    </div>
</div>
`;

        // Step - 04
        history.appendChild(newHistory)

    }
    else if (coupon == "") {
        alert("Please enter your coupon!");
        return;
    }
    else {
        alert("Invalid Coupon!");
        return;
    }

})