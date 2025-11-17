import "../../styles/HomePage/HomeContent.css";

export default function HomeContent() {
  return (
    <main className="home-main">
      <div className="home-container">
        <div className="home-row">
          <div className="home-col text-section">
            <h1 className="home-titulo">ENCONTRE SEU COMPANHEIRO HOJE</h1>
            <h2 className="home-subtitulo">
              Faça um animal feliz! Aqui você encontra diversos animais que
              foram encontrados, cuidados e que agora estão procurando um lar!
            </h2>

            <div className="home-card">
              <div className="home-card-row">
                <div className="home-card-col">
                  <h3 className="home-card-titulo">PETS ADOTADOS</h3>
                  <div className="home-pets-adotados">
                    <div className="home-pet-icon">
                      <img
                        src="img/cachorro-icon-home.png"
                        alt="icon-cachorro"
                        className="home-icon-cachorro"
                      />
                    </div>
                    <div className="home-pet-text">
                      <p className="home-txt-direita">X HOJE</p>
                    </div>
                  </div>
                  <h3 className="home-card-subtitulo">Últimas adoções</h3>
                  <div className="home-img-perfis-menu">
                    <img
                      src="/img/cachorro1.png"
                      alt=""
                      className="home-ultimas-adocoes"
                    />
                    <img
                      src="/img/cachorro1.png"
                      alt=""
                      className="home-ultimas-adocoes"
                    />
                    <img
                      src="/img/cachorro1.png"
                      alt=""
                      className="home-ultimas-adocoes"
                    />
                    <img
                      src="/img/cachorro1.png"
                      alt=""
                      className="home-ultimas-adocoes"
                    />
                  </div>
                </div>

                <div className="home-divisor"></div>

                <div className="home-card-col lista-animais">
                  <ul className="home-sem-bolinha">
                    <li>GATO</li>
                    <li>CACHORRO</li>
                    <li>PÁSSARO</li>
                    <li>ROEDOR</li>
                    <li>E MUITO MAIS!!!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="home-col casa-icon">
            <img src="img/casa-home.png" alt="casa icon" />
          </div>
        </div>
      </div>
      <div>
        <h6>Link para navegar (temporário):</h6>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/cadastraUsuario">CadastraUsuario</a>
          </li>
          <li>
            <a href="/cadastraPet">CadastraPet</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/faq">Faq</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
