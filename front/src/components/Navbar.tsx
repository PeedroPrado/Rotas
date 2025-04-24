import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Fatec <span>Jacareí</span></h1>
        <p>Prof. Francisco de Moura</p>
      </div>
      <div className="navbar-right">
        <Link to="/palpite">Palpite</Link>
        <Link to="/historico">Histórico</Link>
      </div>
    </header>
  );
};

export default Navbar;
