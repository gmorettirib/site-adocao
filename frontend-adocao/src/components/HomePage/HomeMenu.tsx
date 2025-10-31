import "../../styles/Menu.css";

export default function HomeMenu() {
  return (
    <header>
      <nav>
        <li className="logo_adocao">
          <a href="#">ADOCÃO</a>
        </li>
        <ul className="lista_menu">
          <li>
            <a href="#">SOBRE O PROJETO</a>
          </li>
          <li>
            <a href="#">ADOTAR</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
