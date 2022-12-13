import axios from "axios";

// TODO: get a short quote if a user toggles option
export const getKanyeRestQuote = async () => {

  try {
    // nested destructuring of kanye rest api response
    const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })
    return text;
  } catch (err) {
    // TODO: throw alert to user?
    console.error(err);
  }

}