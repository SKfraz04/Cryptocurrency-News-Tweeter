# Cryptocurrency News Tweeter

A full-stack web application that displays the latest cryptocurrency news articles and allows users to generate and post tweets about them.

## Features

- Displays top 10 cryptocurrency news articles
- Rephrases news articles into tweet-friendly content using Google's Gemini API
- Posts generated tweets directly to Twitter

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios for API requests

### Backend
- Node.js
- Express.js
- Axios for external API requests

### External APIs
- NewsAPI for cryptocurrency news articles
- Google Gemini (formerly Bard) for content generation
- Twitter API v2 for posting tweets

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager
- API keys for NewsAPI, Google Gemini, and Twitter

### Environment Configuration
Create `.env` files in the `backend` directory with the following variables:

```
PORT=5000
NEWS_API_KEY=your_newsapi_key
BARD_API_KEY=your_gemini_api_key
TWITTER_APP_KEY=your_twitter_app_key
TWITTER_APP_SECRET=your_twitter_app_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret
```

### Installation and Running

1. Clone the repository:
```
git clone https://github.com/yourusername/cryptonews-tweeter.git
cd cryptonews-tweeter
```

2. Install backend dependencies:
```
cd backend
npm install
```

3. Start the backend server:
```
npm run dev
```

4. In a new terminal, install frontend dependencies:
```
cd ../frontend
npm install
```

5. Start the frontend development server:
```
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Browse the list of top cryptocurrency news articles.
2. Click "Rephrase" on any article to generate a tweet using Gemini.
3. Click "Tweet This" to post the generated content to your Twitter account.

## License

MIT License 