// src/components/auth/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with your auth logic
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}