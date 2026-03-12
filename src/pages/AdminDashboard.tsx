import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import Productos from "./Productos";
import Stock from "./Stock";
import Ventas from "./Ventas";
import Reportes from "./Reportes";
import Clientes from "./Clientes";
import Usuarios from "./Usuarios";
import Configuracion from "./Configuracion";
import Notificaciones from "./Notificaciones";
import DashboardHome from "./DashboardHome";

export default function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <Layout onLogout={logout}>
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="productos" element={<Productos />} />
        <Route path="stock" element={<Stock />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="configuracion" element={<Configuracion />} />
        <Route path="notificaciones" element={<Notificaciones />} />
      </Routes>
    </Layout>
  );
}
