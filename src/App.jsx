import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary'; // Updated import path
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/global.css';

// Lazy-loaded pages with error boundaries
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const IdeasPage = lazy(() => import('./pages/Ideas/IdeasPage'));
const ConsultationPage = lazy(() => import('./pages/Consultation/ConsultationPage'));
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner fullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="ideas" element={<IdeasPage />} />
              <Route path="consult" element={<ConsultationPage />} />
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
}