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
  if (currSelect === euro){
    document.querySelector('#showResponse').innerText = `$${amount} is ${response.proximity}.`;
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