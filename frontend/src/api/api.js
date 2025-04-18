import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch top 10 cryptocurrency news articles
 * @returns {Promise<Array>} - Array of news articles
 */
export const fetchNews = async () => {
  try {
    const response = await api.get('/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

/**
 * Rephrase a news article title into a tweet
 * @param {string} title - The news article title
 * @param {string} url - The URL of the news article
 * @returns {Promise<string>} - The rephrased tweet text
 */
export const rephraseArticle = async (title, url) => {
  try {
    const response = await api.post('/rephrase', { title, url });
    return response.data.tweet;
  } catch (error) {
    console.error('Error rephrasing article:', error);
    throw error;
  }
};

/**
 * Post a tweet to Twitter
 * @param {string} tweetText - The text content to tweet
 * @returns {Promise<Object>} - The tweet result data
 */
export const postTweet = async (tweetText) => {
  try {
    const response = await api.post('/tweet', { tweetText });
    return response.data;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
}; 