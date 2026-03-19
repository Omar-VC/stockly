// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const fakeUsers: User[] = [
  { email: "demo@demo.com", password: "1234", name: "Usuario Demo" },
  { email: "admin@demo.com", password: "admin", name: "Administrador" },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Verificar sesión guardada en localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const found = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      navigate("/dashboard");
    } else {
      throw new Error("Credenciales inválidas");
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
