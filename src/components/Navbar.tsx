import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Navbar({
  onLogout,
  onToggleSidebar,
}: {
  onLogout: () => void;
  onToggleSidebar: () => void;
}) {
  return (
    <header className="w-full bg-stockly-dark text-white px-6 h-[64px] flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-4">
        {/* Hamburguesa en móviles */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden bg-stockly-muted p-2 rounded hover:bg-stockly-gray transition"
        >
          <Bars3Icon className="h-[24px] w-[24px]" />
        </button>

        {/* Logo */}
        <Link to="/dashboard" className="flex items-center h-full">
          <img
            src="/stockly-logo.png"
            alt="Stockly"
            className="max-h-[80px] md:max-h-[80px] lg:max-h-[90px] w-auto object-contain"
          />
        </Link>
      </div>

      {/* Botón salir minimalista */}
      <button
        onClick={onLogout}
        className="text-sm font-semibold text-white px-3 py-1 rounded transition 
             hover:bg-white/10 hover:text-white"
      >
        Salir
      </button>
    </header>
  );
}
