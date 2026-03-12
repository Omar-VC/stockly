import { Link } from "react-router-dom";

export default function SidebarItem({
  to,
  label,
  icon: Icon,
  onClick,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick} // 👈 esto cierra el sidebar en móvil
      className="flex items-center gap-3 px-3 py-2 rounded hover:bg-stockly-gray transition"
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
