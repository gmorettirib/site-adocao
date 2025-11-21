import "./HomeContent.css";

export default function HomeContent() {
  const ultimasAdocoes = [
    "/img/cachorro1.png",
    "/img/cachorro1.png",
    "/img/cachorro1.png",
    "/img/cachorro1.png",
  ];

  const categorias = ["GATO", "CACHORRO", "PÁSSARO", "ROEDOR", "E MUITO MAIS!!!"];

  return (
    <main className="home-main">
      <div className="home-container">
        <div className="home-row">
          
          {/* SEÇÃO DE TEXTO */}
          <div className="home-col text-section">
            <h1 className="home-titulo">ENCONTRE SEU COMPANHEIRO HOJE</h1>

            <h2 className="home-subtitulo">
              Faça um animal feliz! Aqui você encontra diversos animais que
              foram encontrados, cuidados e agora procuram um lar!
            </h2>

            {/* CARD PRINCIPAL */}
            <div className="home-card">
              <div className="home-card-row">

                {/* COLUNA 1 */}
                <div className="home-card-col">
                  <h3 className="home-card-titulo">PETS ADOTADOS</h3>

                  <div className="home-pets-adotados">
                    <div className="home-pet-icon">
                      <img
                        src="/img/cachorro-icon-home.png"
                        alt="Ícone cachorro"
                        className="home-icon-cachorro"
                      />
                    </div>

                    <p className="home-txt-direita">X HOJE</p>
                  </div>

                  <h3 className="home-card-subtitulo">Últimas adoções</h3>

                  <div className="home-img-perfis-menu">
                    {ultimasAdocoes.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="pet adotado"
                        className="home-ultimas-adocoes"
                      />
                    ))}
                  </div>
                </div>

                {/* DIVISOR */}
                <div className="home-divisor"></div>

                {/* LISTA DE ANIMAIS */}
                <div className="home-card-col lista-animais">
                  <ul className="home-sem-bolinha">
                    {categorias.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* IMAGEM DA CASA */}
          <div className="home-col casa-icon">
            <img src="/img/casa-home.png" alt="Casa para pets" />
          </div>
        </div>
      </div>

      {/* LINKS TEMPORÁRIOS */}
      <div className="home-links-temp">
        <h6>Link para navegar (temporário):</h6>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/cadastraUsuario">Cadastra Usuário</a></li>
          <li><a href="/cadastraPet">Cadastrar Pet</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
    </main>
  );
}
