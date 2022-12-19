import axios from "axios";
import Filter from 'bad-words'

const filter = new Filter();

let quoteRetrievalAttempts = 1;

export const getKanyeRestQuote = async ({ explicitAllowed }) => {

  try {
    // nested destructuring of kanye rest api response
    const { data: { quote: text } } = await axios({ method: 'get', url: 'https://api.kanye.rest' })

    // check length of quote
    if (text.length > 90) {
      throw Error(`quote is too long! containing ${(text.length)} characters... ${50 - quoteRetrievalAttempts} attempts left`);
    }

    // check if the quote contains profanity
    if (!explicitAllowed && filter.isProfane(text)) {
      throw Error(`quote "${text}" contains profanity!... ${50 - quoteRetrievalAttempts} attempts left`);
    }

    return text.toLowerCase();

  } catch (err) {
    console.error(err);
    quoteRetrievalAttempts++
    if (quoteRetrievalAttempts < 50) {
      return await getKanyeRestQuote({ explicitAllowed });
    } else {
      throw err;
    }
  }

}