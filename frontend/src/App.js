import React from 'react';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Crypto News Tweeter</h1>
          <p className="mt-2">Top cryptocurrency news with tweet generation</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Latest Cryptocurrency News</h2>
        <NewsList />
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Crypto News Tweeter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 