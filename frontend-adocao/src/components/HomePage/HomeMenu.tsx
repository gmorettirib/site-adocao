import "../../styles/Menu.css"

export default function HomeMenu() {
  return (
    <header>
      <nav>
        <li className="logo_adocao">
          <a className="menu" href="/" >ADOCÃO</a>
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
          <li className="logo_adocao">
          <a className="menu" href="/cadastra" >cadastro</a>
        </li>
        </ul>
      </nav>
    </header>
  );
}
