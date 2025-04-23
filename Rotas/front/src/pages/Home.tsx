import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6">Bem-vindo!</h1>
        <Link to="/palpite">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Clique para começar
          </button>
        </Link>
      </div>
    </div>
  );
}
