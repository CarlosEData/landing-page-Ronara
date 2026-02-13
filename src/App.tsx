import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Consultoria from './pages/Consultoria';
import Mentoria from './pages/Mentoria';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/consultoria') {
        setCurrentPage('consultoria');
      } else if (path === '/mentoria') {
        setCurrentPage('mentoria');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    let path = '/';
    if (currentPage === 'consultoria') {
      path = '/consultoria';
    } else if (currentPage === 'mentoria') {
      path = '/mentoria';
    }
    window.history.pushState({}, '', path);
  }, [currentPage]);

  return (
    <div className="bg-charcoal">
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'consultoria' && <Consultoria onNavigate={handleNavigate} />}
      {currentPage === 'mentoria' && <Mentoria onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
