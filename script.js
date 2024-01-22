let amountToPayInput = document.getElementById('amountToPay');
let numberOfPeopleInput = document.getElementById('numberOfPeople');
let tipAmountInput = document.getElementById('tipAmount');
let totalAmountOutput = document.getElementById('totalAmount');
let eachPeopleBillOutput = document.getElementById('eachPeopleBill');
let landingPage = document.querySelector('.landing-page');
let billSplitContainer = document.querySelector('.bill-split-container');

function showBillSplit() {
    landingPage.style.display = 'none';
    billSplitContainer.style.display = 'flex';
}

function calculateBill() {
    let amountToPay = parseFloat(amountToPayInput.value);
    let numberOfPeople = parseInt(numberOfPeopleInput.value);
    let tipAmount = parseFloat(tipAmountInput.value);

    // Check if inputs are valid
    if (isNaN(amountToPay) || isNaN(numberOfPeople) || isNaN(tipAmount)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Calculate total amount with tip
    let totalAmount = amountToPay + (amountToPay * tipAmount / 100);

    // Calculate amount per person
    let eachPeopleBill = totalAmount / numberOfPeople;

    // Display the results
    totalAmountOutput.textContent = `$${totalAmount.toFixed(2)}`;
    eachPeopleBillOutput.textContent = `$${eachPeopleBill.toFixed(2)}`;

    // Hide the bill-split-container and show the result
    billSplitContainer.style.display = 'none';
    document.querySelector('.result').style.display = 'flex';
}

function calculateBillAgain() {
    // Clear input fields
    amountToPayInput.value = '';
    numberOfPeopleInput.value = '';
    tipAmountInput.value = '';

    // Hide the result and show the bill-split-container
    document.querySelector('.result').style.display = 'none';
    landingPage.style.display = 'flex';
}

// Event listeners for increment and decrement buttons
document.getElementById('increment').addEventListener('click', function () {
    numberOfPeopleInput.value = parseInt(numberOfPeopleInput.value) + 1;
});

document.getElementById('decrement').addEventListener('click', function () {
    let currentValue = parseInt(numberOfPeopleInput.value);
    if (currentValue > 1) {
        numberOfPeopleInput.value = currentValue - 1;
    }
});