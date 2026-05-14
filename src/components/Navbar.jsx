import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a href="#homeSection" className="nav-logo">
        LC<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#voluntario">Voluntário</a></li>
        <li><a href="#pessoais">Pessoais</a></li>
        <li><a href="#musica">Música</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
