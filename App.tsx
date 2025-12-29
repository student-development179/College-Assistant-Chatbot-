
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'chat'>('home');

  // Handle browser back/forward buttons using the hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/chatbot') {
        setCurrentPage('chat');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToChat = () => {
    window.location.hash = '#/chatbot';
  };

  const navigateToHome = () => {
    window.location.hash = '#/';
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-all duration-300">
      {currentPage === 'home' ? (
        <LandingPage onStartChat={navigateToChat} />
      ) : (
        <ChatWindow onBack={navigateToHome} />
      )}
    </div>
  );
};

export default App;
