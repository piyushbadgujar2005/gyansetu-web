import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoadingPage from './components/Loadingpage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import AboutPage from './pages/AboutPage';
import MathLabPage from './pages/MathLabPage';
import InteractiveBoardsPage from './pages/InteractiveBoardsPage';

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="antialiased min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-300">
      {isLoading && <LoadingPage onComplete={handleLoadingComplete} />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Products />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/mathlab" element={<MathLabPage />} />
          <Route path="/products/interactive-boards" element={<InteractiveBoardsPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;

