export default function EncontraPetMenu() {
    return (
      <header>
        <nav>
          <div className="logo_adocao">
            <a className="menu" href="/">
              ADOCÃO
            </a>
          </div>
          <div className="lista_menu">
            <a href="/cadastraUsuario" className="menu">
              CADASTRE-SE
            </a>
            <a href="/login" className="menu">
              LOGIN
            </a>
          </div>
        </nav>
      </header>
    );
  }
  