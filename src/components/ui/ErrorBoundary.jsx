import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = { 
    hasError: false, 
    error: null,
    errorInfo: null,
    timestamp: null
  };

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      error,
      timestamp: Date.now()
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
    
    if (window._trackJs) {
      window._trackJs.track(error);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      timestamp: null
    });
    
    window.location.href = window.location.pathname + '?t=' + Date.now();
  };

  renderDevDetails() {
    if (process.env.NODE_ENV === 'development') {
      return (
        <details className="mt-4 p-4 bg-gray-100 rounded text-left">
          <summary className="font-medium cursor-pointer">Error Details</summary>
          <div className="mt-2">
            <pre className="text-xs overflow-auto">
              {this.state.error?.toString()}
              {this.state.errorInfo?.componentStack}
            </pre>
          </div>
        </details>
      );
    }
    return null;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-red-600">
              Application Error
            </h1>
            <p className="mb-6 text-gray-600">
              {this.state.error?.message || 'An unexpected error occurred'}
              {this.state.timestamp && (
                <span className="block text-sm mt-2">
                  Error ID: {this.state.timestamp}
                </span>
              )}
            </p>
            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Refresh Application
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
              >
                Go to Homepage
              </button>
            </div>
            {this.renderDevDetails()}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node
};