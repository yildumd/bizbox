import { lazy, Suspense } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/global.css';

// Enhanced lazy loading with better error handling and logging
const lazyLoad = (componentName) => {
  return lazy(async () => {
    try {
      const module = await import(`./pages/${componentName}`);
      console.log(`Successfully loaded: ${componentName}`);
      return { default: module.default };
    } catch (error) {
      console.error(`Failed to load ${componentName}:`, error);
      
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
            <div className="mt-4 text-sm text-gray-500">
              Technical details: {error.message}
            </div>
          </div>
        )
      };
    }
  });
};

// Main page components
const HomePage = lazyLoad('Home/HomePage');
const AboutPage = lazyLoad('About/AboutPage');
const IdeasPage = lazyLoad('BusinessIdeas/IdeasPage');
const ConsultationPage = lazyLoad('Consultation/ConsultationPage');
const DashboardPage = lazyLoad('Dashboard/DashboardPage');
const CheckoutPage = lazyLoad('Checkout/CheckoutPage');
const NotFoundPage = lazyLoad('Error/404');

// Special handler for dynamic idea pages
const IdeaPageLoader = () => {
  const { category, id } = useParams();
  
  // Validate category and id first
  if (!category || !id) {
    return <div className="p-4 text-red-500">Invalid idea parameters</div>;
  }

  const IdeaComponent = lazy(async () => {
    try {
      const module = await import(`./pages/BusinessIdeas/categories/${category}/${id}.jsx`);
      return { default: module.default };
    } catch (error) {
      console.error(`Failed to load idea ${category}/${id}:`, error);
      return {
        default: () => (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-4">
              Failed to load this business idea
            </h3>
            <div className="mb-4 text-sm text-gray-600">
              {category}/{id}.jsx not found
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        )
      };
    }
  });

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <IdeaComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
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
          <Suspense fallback={<LoadingSpinner fullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              
              <Route path="ideas">
                <Route index element={<IdeasPage />} />
                <Route path=":category/:id" element={<IdeaPageLoader />} />
              </Route>
              
              <Route path="consult" element={<ConsultationPage />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
              </Route>
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
}