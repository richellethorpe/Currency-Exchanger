export default class CurrencyRates {
  static async getCurrency(amount){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/USD
      ?=`)
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