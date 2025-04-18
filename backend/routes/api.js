const express = require('express');
const router = express.Router();
const { fetchCryptoNews } = require('../services/newsService');
const { rephraseWithGemini } = require('../services/rephraseService');
const { postToTwitter } = require('../services/twitterService');

// GET: Fetch top 10 cryptocurrency news
router.get('/news', async (req, res) => {
  try {
    const articles = await fetchCryptoNews();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
});

// POST: Rephrase a news article into a tweet
router.post('/rephrase', async (req, res) => {
  try {
    const { title, url } = req.body;
    
    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required' });
    }
    
    const tweet = await rephraseWithGemini(title, url);
    res.json({ tweet });
  } catch (error) {
    res.status(500).json({ error: 'Failed to rephrase article' });
  }
});

// POST: Post a tweet to Twitter
router.post('/tweet', async (req, res) => {
  try {
    const { tweetText } = req.body;
    
    if (!tweetText) {
      return res.status(400).json({ error: 'Tweet text is required' });
    }
    
    const result = await postToTwitter(tweetText);
    res.json({ success: true, tweetId: result.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post tweet' });
  }
});

module.exports = router; 