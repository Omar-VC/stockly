import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Error en login:", error);
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
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
              Iniciar Sesión
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
