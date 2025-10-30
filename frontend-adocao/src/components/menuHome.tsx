import "../styles/menuHome.css";

export default function Header() {
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
              <li>
                <a href="#">CADASTRAR-SE</a>
              </li>
            </ul>
          </nav>
        </header>
  );
}
