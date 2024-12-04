import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { AuthService } from '../services/authService';

interface AuthGuardProps {
  children: React.ReactNode;
}

const authService = AuthService.getInstance();

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    if (user?.id) {
      authService.validateSession(user.id).then((isValid) => {
        if (!isValid) {
          logout();
        }
      });
    }
  }, [user, logout]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}