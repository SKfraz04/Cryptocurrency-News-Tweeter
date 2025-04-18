const axios = require('axios');
require('dotenv').config();

/**
 * Rephrases news title into a tweet using Google's Gemini API
 * @param {string} title - The news article title
 * @param {string} url - The URL of the news article
 * @returns {Promise<string>} The rephrased tweet text
 */
async function rephraseWithGemini(title, url) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.BARD_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `Generate a concise and engaging tweet for X.com under 279 characters based on the news title: ${title}. Use the reference URL: ${url} to gather more information. Include relevant hashtags, emojis, and avoid posting any reference links in the tweet. Keep the tone aligned with the topic`
          }]
        }]
      }
    );
    
    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
      `Check out this crypto news: ${title} #cryptocurrency`;
  } catch (error) {
    console.error('Error rephrasing with Gemini:', error);
    // Fallback in case the API fails
    return `Check out this crypto news: ${title} #cryptocurrency`;
  }
}

module.exports = {
  rephraseWithGemini
}; 