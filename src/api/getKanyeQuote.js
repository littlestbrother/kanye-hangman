import axios from "axios";

// TODO: get another quote if the first quote is too long?
export default async () => {

  try {
    // nested destructuring of kanye rest api response
    const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })
    return text;
  } catch (err) {
    // TODO: throw alert to user?
    console.error(err);
  }

}