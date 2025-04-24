import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Palpite from './pages/Palpite';
import Historico from './pages/Historico';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
