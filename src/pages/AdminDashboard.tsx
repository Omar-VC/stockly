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
     <div className="text-center lg:text-left">
        {/* Logo */}
        <img
          src="/stockly-logo-negro.png"
          alt="Stockly"
          className="w-48 h-auto mb-4 mx-auto lg:mx-0 lg:ml-8"
        />

        {/* Slogan */}
        <p className="text-black text-lg font-mediun text-center lg:text-left lg:-ml-16">
          Tu aliado confiable para controlar stock y ventas
        </p>
      </div>
    </Layout>
  );
}
