import Layout from "../components/Layout";
import { account } from "../services/appwrite";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/"); // vuelve al login
    } catch (error) {
      console.error("Error en logout:", error);
    }
  };

  return (
    <Layout onLogout={logout}>
      <h2 className="text-2xl font-bold text-stockly-dark mb-4">
        Bienvenido al Dashboard
      </h2>
      <p className="text-stockly-muted">
        Aquí verás un resumen de tu stock y ventas.
      </p>
    </Layout>
  );
}
