import { useState, useEffect } from "react";
import { account } from "../services/appwrite";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // 1. Verificar si ya hay sesión activa
  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
        navigate("/dashboard"); // si ya está logueado, lo mandamos al dashboard
      } catch {
        // no hay sesión activa → se queda en login
      }
    };
    checkSession();
  }, []);

  // 2. Login
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      const currentUser = await account.get();
      setUser(currentUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // 3. Logout
  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/"); // vuelve al login
    } catch (error) {
      console.error("Error en logout:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stockly-light">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-stockly-dark">
          Stockly
        </h1>

        {user ? (
          <div className="text-center">
            <p className="mb-4">
              Bienvenido <span className="font-semibold">{user.name}</span>
            </p>
            <button
              onClick={logout}
              className="w-full bg-stockly-dark text-white py-2 rounded hover:bg-stockly-muted transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={login} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-stockly-gray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stockly-muted"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-stockly-gray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stockly-muted"
            />
            <button
              type="submit"
              className="bg-stockly-dark text-white py-2 rounded hover:bg-stockly-muted transition"
            >
              Iniciar Sesion
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
