import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/global.css';

// Enhanced lazy loading with retry mechanism and better error handling
const lazyLoad = (componentName) => {
  return lazy(async () => {
    try {
      const module = await import(`./pages/${componentName}`);
      return { default: module.default };
    } catch (error) {
      console.error(`Failed to load ${componentName}:`, error);
      
      // Return a fallback component that allows retries
      return { 
        default: () => (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-4">
              Failed to load {componentName.split('/').pop()}
            </h3>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Retry Loading
            </button>
          </div>
        )
      };
    }
  });
};

// Direct component imports (better for Vercel deployment)
const HomePage = lazyLoad('Home/HomePage');
const AboutPage = lazyLoad('About/AboutPage');
const IdeasPage = lazyLoad('BusinessIdeas/IdeasPage');
const IdeaLayout = lazyLoad('BusinessIdeas/categories/IdeaLayout');
const ConsultationPage = lazyLoad('Consultation/ConsultationPage');
const DashboardPage = lazyLoad('Dashboard/DashboardPage');
const CheckoutPage = lazyLoad('Checkout/CheckoutPage');
const NotFoundPage = lazyLoad('Error/404');

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* ErrorBoundary wraps the entire content */}
        <ErrorBoundary 
          fallback={
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-4">Critical Application Error</h2>
              <p className="mb-6">Please refresh the page or try again later</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Refresh Application
              </button>
            </div>
          }
        >
          {/* Suspense for all lazy-loaded components */}
          <Suspense fallback={<LoadingSpinner fullPage />}>
            <Routes>
              {/* Public Routes */}
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              
              {/* Business Ideas Routes */}
              <Route path="ideas">
                <Route index element={<IdeasPage />} />
                {/* Ensure this matches your file structure */}
                <Route path=":category/:id" element={<IdeaLayout />} />
              </Route>
              
              <Route path="consult" element={<ConsultationPage />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
              </Route>
              
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