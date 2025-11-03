import "../../styles/Menu.css";

export default function LoginMenu() {
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
        </ul>
      </nav>
    </header>
  );
}
