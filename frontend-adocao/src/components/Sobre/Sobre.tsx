import "./Sobre.css";

export default function Sobre() {
  return (
    <section className="sobre">
      <h2 className="titulo">SOBRE NOSSO PROJETO</h2>
      <div className="cards">
        <div className="card">
          <h2 className="card-titulo">QUEM SOMOS?</h2>
          <p>
            Somos um projeto de adoção de qualquer tipo de pet! Com sistema de
            localização para calcular sua distância até o seu futuro pet.
          </p>
        </div>
        <div className="card">
          <h2 className="card-titulo">O QUE FAZEMOS?</h2>
          <p>
            Compartilhamos pets que estão precisando de donos, além de que
            qualquer usuário cadastrado consegue achar um dono para um pet
            carente também!
          </p>
        </div>
      </div>
      <div className="integrantes">
        <h2 className="integrantes-titulo">INTEGRANTES</h2>

        <div className="integrantes-lista">
          <div className="membro">
            <img src="img/dri.jpg" alt="oto do integrante 1" />
            <h4>Adriano Bendazzoli</h4>
          </div>

          <div className="membro">
            <img src="img/alysson.jpg" alt="Foto do integrante 2" />
            <h4>Alysson Rocha</h4>
          </div>

          <div className="membro">
            <img src="img/daniel.jpg" alt="Foto do integrante 3" />
            <h4>Daniel Diogo</h4>
          </div>

          <div className="membro">
            <img src="img/felipe.jpg" alt="Foto do integrante 4" />
            <h4>Felipe José</h4>
          </div>

          <div className="membro">
            <img src="img/moretti.jpg" alt="Foto do integrante 5" />
            <h4>Guilherme Moretti</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
