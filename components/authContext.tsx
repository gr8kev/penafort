import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string | null;
  // Add more fields as needed
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("loggedInEmail");
    if (storedEmail) {
      setIsLoggedIn(true);
      setUser({ email: storedEmail });
    }
  }, []);

  const login = (email: string) => {
    setIsLoggedIn(true);
    setUser({ email });
    localStorage.setItem("loggedInEmail", email);
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem("loggedInEmail");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
