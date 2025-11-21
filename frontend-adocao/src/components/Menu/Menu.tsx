import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav className="menu-nav">
        <ul className="menu-lista-principal">
          <li className="logo_adocao">
            <a className="menu" href="/">
              ADOCÃO
            </a>
          </li>
        </ul>

        <ul className="lista_menu">
          <li>
            <a className="menu" href="/sobre">
              SOBRE O PROJETO
            </a>
          </li>
          <li>
            <a className="menu" href="#">
              ADOTAR
            </a>
          </li>
          <li>
            <a className="menu" href="/login">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
