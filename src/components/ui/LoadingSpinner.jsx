// src/components/ui/LoadingSpinner.jsx
import PropTypes from 'prop-types';

export default function LoadingSpinner({ 
  size = 'md',
  variant = 'primary',
  fullPage = false,
  className = ''
}) {
  const sizeClasses = {
    xs: 'h-4 w-4 border-2',
    sm: 'h-6 w-6 border-2',
    md: 'h-8 w-8 border-[3px]',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4'
  };

  const variantClasses = {
    primary: 'border-t-blue-600 border-b-blue-600 border-transparent',
    secondary: 'border-t-gray-600 border-b-gray-600 border-transparent',
    success: 'border-t-green-600 border-b-green-600 border-transparent',
    danger: 'border-t-red-600 border-b-red-600 border-transparent',
    light: 'border-t-gray-200 border-b-gray-200 border-transparent',
    dark: 'border-t-gray-800 border-b-gray-800 border-transparent'
  };

  return (
    <div 
      className={`flex items-center justify-center ${fullPage ? 'min-h-screen' : ''} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div 
        className={`animate-spin rounded-full ${sizeClasses[size]} ${variantClasses[variant]}`}
      />
    </div>
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'light', 'dark']),
  fullPage: PropTypes.bool,
  className: PropTypes.string
};

LoadingSpinner.defaultProps = {
  size: 'md',
  variant: 'primary',
  fullPage: false,
  className: ''
};