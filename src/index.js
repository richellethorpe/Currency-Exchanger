import CurrencyRates from "./Currency-Exchanger";

async function getCurrency(amount, currSelect){
  const response = await CurrencyRates.getCurrency(amount, currSelect);
  if (response.result === "success"){
    printCurrency(response, amount, currSelect);
    console.log("printCurrency");
  }else {
    printError(amount, currSelect);
  }
}

function printCurrency(response, amount, currSelect) {
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
  console.log("print currency funtion");
}

function printError(amount){
  console.log("printerror");
  document.querySelector(`#showResponse`).innerText = `There was an error accessing the currency converter for ${amount}: We were unable to find information on that location. Please try again.`;
}

function handleForm(event) {
  event.preventDefault();
  const amount = document.querySelector('#currency-amt').value;
  document.querySelector('#currency-amt').value = null;
  const currSelect = document.querySelector('#currency-name').value;
  getCurrency(amount, currSelect);
}


window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleForm);
});