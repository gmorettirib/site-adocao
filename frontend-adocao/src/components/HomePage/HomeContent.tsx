import "../../styles/HomePage/HomeContent.css";

export default function HomeContent() {
  return (
    <body>
      <main>
        <div className="container">
          <div className="row">
            <div className="col ">
              <h1 className="titulo_home">ENCONTRE SEU COMPANHEIRO HOJE</h1>
              <h2 className="subtitulo_home">
                Faça um animal feliz, aqui voce encontra diversos animais que
                foram encontrados, cuidados e que agora estao procurando um lar!
              </h2>
              <div className="card">
                <div className="row">
                  <div className="col">
                    <h3 className="titulo_box_homepage">PETS ADOTADOS</h3>
                    <div className="row pets_adotados">
                      <div className="col">
                        <img
                          src="img/cachorro-icon-home.png"
                          alt="icon-cachorro"
                          className="icon_cachorro"
                        />
                      </div>
                      <div className="col">
                        <p className="txt_direita">X HOJE</p>
                      </div>
                    </div>
                    <h3 className="subtitulo_box_homepage">Ultimas adoções</h3>
                    <div className="img_perfis_menu">
                      <img
                        src="/img/cachorro1.png"
                        alt=""
                        className="ultimas_adocoes_usuarios"
                      />
                      <img
                        src="/img/cachorro1.png"
                        alt=""
                        className="ultimas_adocoes_usuarios"
                      />
                      <img
                        src="/img/cachorro1.png"
                        alt=""
                        className="ultimas_adocoes_usuarios"
                      />
                      <img
                        src="/img/cachorro1.png"
                        alt=""
                        className="ultimas_adocoes_usuarios"
                      />
                    </div>
                  </div>
                  <div className="divisor"></div>
                  <div className="col lista_animais">
                    <ul className="sem_bolinha">
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
            <div className="col casa-icon">
              <img src="img/casa-home.png" alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </body>
  );
}
