// export default class CurrencyRates {
//   static async getCurrency(amount){
//     try {
//       const response = await fetch(`https://v6.exchangerate-api.com/v6/d6e7ee65568b0fa5d8b71229/latest/USD
//       ?=1`);
//       console.log(response);
//       // const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}
//       // /latest/USD?=`)
//       //double check api key value
//       const jsonResponse = await response.json();
//       if (!response.ok){
//         const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       return jsonResponse;
//     }catch(error){
//       return error;
//     }
//   }
// }

// export default function getCurrency(amount, currSelect){
//     let request = new XMLHttpRequest();
//     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD?=${amount}`;
//     request.addEventListener("loadend", function() {
//       const apiResponse = JSON.parse(this.responseText);
//       if (this.status === 200){
//        printCurrency(apiResponse, amount, currSelect)
//       }else{
//         document.querySelector(`#showResponse`).innerText = `Error Message: ${this.status}. Rub your magic lamp and try again, my friend.`;

//       }
//   });
//   request.open("GET", url, true);
//   request.send();
// }