import React, { useState } from 'react';
import { rephraseArticle, postTweet } from '../api/api';

/**
 * Component for displaying a single news article with rephrase and tweet functionality
 */
const NewsCard = ({ article }) => {
  const [tweet, setTweet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRephrase = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const tweetText = await rephraseArticle(article.title, article.url);
      setTweet(tweetText);
    } catch (err) {
      setError('Failed to rephrase article');
    } finally {
      setLoading(false);
    }
  };

  const handleTweet = async () => {
    if (!tweet) return;
    
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      await postTweet(tweet);
      setSuccess('Tweet posted successfully!');
    } catch (err) {
      setError('Failed to post tweet');
    } finally {
      setLoading(false);
    }
  };

  // Format publication date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      
      <p className="text-gray-600 mb-2">{article.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          {article.source?.name || 'Unknown Source'} • {formatDate(article.publishedAt)}
        </span>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
      
      <div className="border-t pt-4">
        <button 
          onClick={handleRephrase}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Processing...' : 'Rephrase'}
        </button>
        
        {tweet && (
          <button 
            onClick={handleTweet}
            disabled={loading}
            className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-blue-500 disabled:bg-blue-300"
          >
            Tweet This
          </button>
        )}
        
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
        
        {tweet && (
          <div className="mt-4 bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Generated Tweet:</h3>
            <p className="text-gray-800">{tweet}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard; 