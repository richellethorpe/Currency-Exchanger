export default class CurrencyCounter {
  static async getCurrency() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      // console.log(response);
      // console.log(jsonResponse);
      return jsonResponse; 
    } catch(error) {
      return error;
    }
  }
}