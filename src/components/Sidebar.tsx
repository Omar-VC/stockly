import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  CubeIcon,
  ArchiveBoxIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  UserGroupIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuItems = [
    { to: "/dashboard/productos", label: "Productos", icon: CubeIcon },
    { to: "/dashboard/stock", label: "Stock", icon: ArchiveBoxIcon },
    { to: "/dashboard/ventas", label: "Ventas", icon: ShoppingCartIcon },
    { to: "/dashboard/reportes", label: "Reportes", icon: ChartBarIcon },
    { to: "/dashboard/clientes", label: "Clientes", icon: UserGroupIcon },
    { to: "/dashboard/usuarios", label: "Usuarios", icon: UserIcon },
    {
      to: "/dashboard/configuracion",
      label: "Configuración",
      icon: Cog6ToothIcon,
    },
    {
      to: "/dashboard/notificaciones",
      label: "Notificaciones",
      icon: BellIcon,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-stockly-dark/80 backdrop-blur-sm text-white p-6 transform transition-transform duration-300 shadow-2xl border-gray-700
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {isOpen && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 bg-stockly-muted text-white rounded-full p-2 shadow-md md:hidden hover:bg-stockly-gray transition"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}

        <div className="flex justify-center mt-2 mb-4 md:hidden">
          <Link to="/dashboard">
            <img
              src="/stockly-logo.png"
              alt="Stockly"
              className="max-h-[80px] w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <SidebarItem key={item.to} {...item} onClick={onClose} />
          ))}
        </nav>
      </aside>
    </>
  );
}
