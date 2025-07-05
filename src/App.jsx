import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/global.css';

// Enhanced lazy loading with error handling
const lazyLoad = (path) => lazy(() => import(`${path}`)
  .then(module => ({ default: module.default }))
  .catch(error => {
    console.error(`Failed to load component at ${path}:`, error);
    return { default: () => <div className="text-center py-12">Failed to load component. Please refresh the page.</div> };
  }));

// Lazy-loaded pages with error boundaries
const HomePage = lazyLoad('./pages/Home/HomePage');
const AboutPage = lazyLoad('./pages/About/AboutPage');
const IdeasPage = lazyLoad('./pages/BusinessIdeas/IdeasPage');
const IdeaLayout = lazyLoad('./components/BusinessIdeaTemplate/IdeaLayout');
const ConsultationPage = lazyLoad('./pages/Consultation/ConsultationPage');
const DashboardPage = lazyLoad('./pages/Dashboard/DashboardPage');
const CheckoutPage = lazyLoad('./pages/Checkout/CheckoutPage');
const NotFoundPage = lazyLoad('./pages/Error/404');

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <ErrorBoundary 
          fallback={
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-4">Something went wrong</h2>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Refresh Page
              </button>
            </div>
          }
        >
          <Suspense fallback={<LoadingSpinner fullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              
              {/* Business Ideas Routes */}
              <Route path="ideas">
                <Route index element={<IdeasPage />} />
                <Route path=":category/:id" element={<IdeaLayout />} />
              </Route>
              
              <Route path="consult" element={<ConsultationPage />} />
              
              {/* Protected Routes */}
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              
              <Route path="checkout" element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              } />
              
              {/* Error Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
}