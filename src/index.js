import CurrencyCounter from "./Currency-Exchanger";

async function getCurrency(amount, currSelect) {
  const apiResponse = await CurrencyCounter.getCurrency(amount, currSelect);
  console.log(apiResponse.documentation);
  if (apiResponse.documentation) {
    printCurrency(apiResponse, amount, currSelect);
  } else {
    console.log("error")
   // printError(apiResponse, searchTerm); 
  }
}

// function getCurrency(amount, currSelect){
//   let request = new XMLHttpRequest();
//   // const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   const url = `https://v6.exchangerate-api.com/v6/d6e7ee65568b0fa5d8b71229 /latest/USD?=`;
//   request.addEventListener("loadend", function() {
//     const apiResponse = JSON.parse(this.responseText);
//     if (this.status === 200){
//      printCurrency(apiResponse, amount, currSelect)
//     }else{
//       document.querySelector(`#showResponse`).innerText = `Error Message: ${this.status}. Rub your magic lamp and try again, my friend.`;

//     }
// });
// request.open("GET", url, true);
// request.send();
// }

function printCurrency(apiResponse, amount, currSelect) {

  if (currSelect === "euro"){
    const eurTotal = (apiResponse.conversion_rates.EUR * amount).toFixed(2);
    document.querySelector('#showResponse').innerText = `$${amount} USD is ${eurTotal} in ${currSelect}s.`;
  }else if (currSelect === "yen"){
    const jpyTotal = (apiResponse.conversion_rates.JPY * amount).toFixed(2);
    document.querySelector('#showResponse').innerText = `$${amount} USD is ${jpyTotal} in ${currSelect}.`;
  }else if (currSelect === "pound"){
    const gbpTotal = (apiResponse.conversion_rates.GBP * amount).toFixed(2);
    document.querySelector('#showResponse').innerText = `$${amount} USD is ${gbpTotal} in ${currSelect}s.`;
  }else if (currSelect === "can-dollar"){
    const cadTotal = (apiResponse.conversion_rates.CAD * amount).toFixed(2);
    document.querySelector('#showResponse').innerText = `$${amount} USD is ${cadTotal} in ${currSelect}s.`;
  }else if (currSelect === "swiss-franc"){
    const chfTotal = (apiResponse.conversion_rates.CHF * amount).toFixed(2);
    document.querySelector('#showResponse').innerText = `$${amount} USD is ${chfTotal} in ${currSelect}s.`;
  }
  console.log("print currency funtion");
}

// function printError(amount){
//   console.log("printerror");
//   document.querySelector(`#showResponse`).innerText = `There was an error accessing the currency converter for ${amount}: We were unable to find information on that location. Please try again.`;
// }

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