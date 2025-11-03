import "../../styles/CadastraUsuario/CadastraUsuario.css";

export default function CadastraUsuarioMenu() {
  return (
    <header>
      <nav>
        <li className="logo_adocao">
          <a className="menu" href="/">ADOCÃO</a>
        </li>
        <ul className="lista_menu">
          <li>
            <a className="menu" href="#">SOBRE O PROJETO</a>
          </li>
          <li>
            <a className="menu" href="#">ADOTAR</a>
          </li>
          <li>
            <a className="menu" href="/login">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
