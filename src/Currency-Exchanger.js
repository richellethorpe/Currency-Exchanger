export default class CurrencyRates {
  static async getCurrency(amount){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/d6e7ee65568b0fa5d8b71229
      /latest/USD?=${amount}`)
      // const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}
      // /latest/USD?=`)
      //double check api key value
      const jsonResponse = await response.json();
      if (!response.ok){
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    }catch(error){
      return error;
    }
  }
}