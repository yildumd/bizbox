// src/App.jsx (or your main router file)
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

// Dynamic imports with proper error boundaries
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const IdeasPage = lazy(() => import('./pages/BusinessIdeas/IdeasPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        {/* Add this catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}