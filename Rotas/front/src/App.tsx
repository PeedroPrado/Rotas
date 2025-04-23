import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Palpite from "./pages/Suggestion";
import Historico from "./pages/History";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palpite" element={<Palpite />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </div>
  );
}
