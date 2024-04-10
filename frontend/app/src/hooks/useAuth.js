import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  }, []);

  const login = () => {
    localStorage.setItem('isAuthenticated', true);
    setIsAuthenticated(true);
  };

  
  return {
    isAuthenticated,
    login,
  };
};

export default useAuth;