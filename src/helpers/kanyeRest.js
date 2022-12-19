import axios from "axios";
import Filter from 'bad-words'

const filter = new Filter();

let retrievalAttempts = 0;

export const getKanyeRestQuote = async ({ explicitAllowed }) => {

  try {

    retrievalAttempts++;

    // nested destructuring of kanye rest api response
    const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })

    // test quote string length (too many characters is too tedious for gameplay)
    if (text.length > 90) {
      throw Error(`quote is too long! containing ${(text.length)} characters... ${50 - retrievalAttempts} attempts left`);
    }

    // text for explicit quotes if the user has disabled them
    if (!explicitAllowed && filter.isProfane(text)) {
      throw Error(`quote "${text}" contains profanity!... ${50 - retrievalAttempts} attempts left`);
    }

    return text.toLowerCase();

    // retry quote retrieval up to 50 times if any of the conditions above fail
  } catch (err) {
    console.error(err);
    if (retrievalAttempts <= 50) {
      return await getKanyeRestQuote({ explicitAllowed });
    } else {
      throw err;
    }
  }

}