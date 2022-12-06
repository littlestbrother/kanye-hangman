import axios from "axios";

export default async () => {

  // nested destructuring of kanye rest api response
  const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })
  return text;

}