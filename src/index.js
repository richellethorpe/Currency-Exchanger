import CurrencyRates from "./Currency-Exchanger";

async function getCurrency(amount){
  const response = await CurrencyRates.getCurrency(amount);
  if (response.result === "success"){
    printCurrency(response, amount);
  }else {
    printError(amount);
  }
}

function printCurrency(response, amount) {
const currSelect = document.querySelector('#currency-name').value;
  if (currSelect === "euro"){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.conversion_rates.EUR * amount}.`;
  }else if (currSelect === "yen"){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.conversion_rates.JPY * amount}.`;
  }else if (currSelect === "pound"){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.conversion_rates.GBP * amount}.`;
  }else if (currSelect === "can-dollar"){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.conversion_rates.CAD * amount}.`;
  }else if (currSelect === "swiss-franc"){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.conversion_rates.CHF * amount}.`;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#currency-amt').value;
  document.querySelector('#currency-amt').value = null;
  getCurrency(amount);
}


window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});