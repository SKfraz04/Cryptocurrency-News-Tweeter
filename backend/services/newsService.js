const axios = require('axios');
require('dotenv').config();

// Create axios instance with SSL verification disabled for development
const instance = axios.create({
  httpsAgent: new (require('https').Agent)({
    rejectUnauthorized: false
  })
});

/**
 * Fetches top 10 cryptocurrency news articles
 * @returns {Promise<Array>} Array of news articles
 */
async function fetchCryptoNews() {
  try {
    const response = await instance.get('https://newsapi.org/v2/everything', {
      params: {
        q: "CryptoCurrency",
        language: "en",
        sortBy: "publishedAt",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    
    return response.data.articles.slice(0, 10); // Top 10 articles
  } catch (error) {
    console.error('Error fetching cryptocurrency news:', error);
    throw new Error('Failed to fetch cryptocurrency news');
  }
}

module.exports = {
  fetchCryptoNews
}; 