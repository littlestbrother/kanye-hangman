import axios from "axios";

export const getKanyeRestQuote = async () => {

  try {
    // nested destructuring of kanye rest api response
    const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })
    if (text.length <= 75) {
      return text.toLowerCase();
    } else {
      return await getKanyeRestQuote();
    }
  } catch (err) {
    console.error(err);
  }

}