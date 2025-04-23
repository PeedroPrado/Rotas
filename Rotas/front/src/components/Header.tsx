import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-white">Fatec</span>
        <span className="text-gray-400 text-sm ml-2">Jacareí<br /><span className="text-xs">Prof. Francisco de Moura</span></span>
      </div>
      <nav className="space-x-4">
        <Link to="/palpite" className="text-white hover:text-blue-400">Palpite</Link>
        <Link to="/historico" className="text-white hover:text-blue-400">Histórico</Link>
      </nav>
    </header>
  );
}
