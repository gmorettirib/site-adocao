import "../styles/home.css";

export default function HomePage() {
  return (
    <body>
      <main>
        <div className="container text-center">
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
                    <h3>PETS ADOTADOS</h3>
                    <div>
                      <img src="/img/cachorro1.png" alt="" />
                      <p className="txt_direita">X HOJE</p>
                    </div>
                    <h3>Ultimas adoções</h3>
                    <div>
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
                      <li>E MUITO MAIS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="img">
                <img src="/img/cachorro1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
