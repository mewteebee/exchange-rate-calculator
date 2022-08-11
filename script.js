const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateDisplay = document.getElementById('rate');
const swapButton = document.getElementById('swap')

function calculate(){
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/90ea5ceccfd41145337979e9/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {

        const rate = data.conversion_rates[currency_two];

        rateDisplay.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountTwo.value = (amountOne.value * rate).toFixed(2);
    });

}

currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.calue = currencyTwo.value;
    currencyTwo.value = temp; 
    calculate();
})

calculate();