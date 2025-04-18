const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

/**
 * Posts a tweet to Twitter using Twitter API v2
 * @param {string} tweetText - The text content to tweet
 * @returns {Promise<Object>} The tweet result data
 */
async function postToTwitter(tweetText) {
  try {
    const twitterClient = new TwitterApi({
      appKey: process.env.TWITTER_APP_KEY,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });
    
    const { data } = await twitterClient.v2.tweet(tweetText);
    return data;
  } catch (error) {
    console.error('Error posting to Twitter:', error);
    throw new Error('Failed to post tweet to Twitter');
  }
}

module.exports = {
  postToTwitter
}; 