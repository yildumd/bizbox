import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
            >
              BizBox
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/ideas" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Ideas
            </Link>
            <Link 
              to="/consult" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Consultation
            </Link>
            <Link 
              to="/signup" 
              className="ml-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}