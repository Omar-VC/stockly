import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay en móviles */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-stockly-dark/80 backdrop-blur-sm text-white p-6 transform transition-transform duration-300 shadow-2xl  border-gray-700
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Botón cerrar en móviles */}
        {isOpen && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 bg-stockly-muted text-white rounded-full p-2 shadow-md md:hidden hover:bg-stockly-gray transition"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}

        {/* Logo solo en móviles */}
        <div className="flex justify-center mt-2 mb-4 md:hidden">
          <Link to="/dashboard">
            <img
              src="/stockly-logo.png"
              alt="Stockly"
              className="max-h-[80px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Menú */}
        <nav className="flex flex-col gap-2">
          <Link
            to="/productos"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Productos
          </Link>
          <Link
            to="/stock"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Stock
          </Link>
          <Link
            to="/ventas"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Ventas
          </Link>
          <Link
            to="/reportes"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Reportes
          </Link>
          <Link
            to="/clientes"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Clientes
          </Link>
          <Link
            to="/usuarios"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Usuarios
          </Link>
          <Link
            to="/configuracion"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Configuración
          </Link>
          <Link
            to="/notificaciones"
            className="px-3 py-2 rounded hover:bg-stockly-gray transition text-sm md:text-base"
          >
            Notificaciones
          </Link>
        </nav>
      </aside>
    </>
  );
}
