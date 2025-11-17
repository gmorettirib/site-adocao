import "../../styles/CadastraPet/CadastraPet.css";

export default function CadastraPetContent() {
  return (
    <main className="cadastro-pet-main">
      <section className="cadastro-pet-container">
        <h2 className="cadastro-pet-titulo">FICHA DO PET!</h2>
        <form
          className="cadastro-pet-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="cadastro-pet-linha">
            <div className="cadastro-pet-campo">
              <label htmlFor="nome" className="cadastro-pet-label">
                Nome (do pet)
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                required
                className="cadastro-pet-input"
              />
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="descricao" className="cadastro-pet-label">
                Descrição:
              </label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Descrição do pet"
                required
                className="cadastro-pet-input"
              />
            </div>
          </div>

          <div className="cadastro-pet-linha">
            <div className="cadastro-pet-campo">
              <label htmlFor="tamanho" className="cadastro-pet-label">
                Tamanho (cm):
              </label>
              <input
                type="text"
                id="tamanho"
                name="tamanho"
                maxLength={14}
                placeholder="Tamanho do pet"
                required
                className="cadastro-pet-input"
              />
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="peso" className="cadastro-pet-label">
                Peso:
              </label>
              <input
                type="number"
                id="peso"
                name="peso"
                placeholder="Peso do pet"
                required
                className="cadastro-pet-input"
              />
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="cor" className="cadastro-pet-label">
                Cor:
              </label>
              <input
                type="text"
                id="cor"
                name="cor"
                placeholder="Cor do pet"
                required
                className="cadastro-pet-input"
              />
            </div>
          </div>

          <div className="cadastro-pet-linha">
            <div className="cadastro-pet-campo">
              <label htmlFor="tipo" className="cadastro-pet-label">
                Tipo:
              </label>
              <input
                type="text"
                id="tipo"
                name="tipo"
                placeholder="Tipo do pet"
                required
                className="cadastro-pet-input"
              />
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="raca" className="cadastro-pet-label">
                Raça:
              </label>
              <input
                type="text"
                id="raca"
                name="raca"
                required
                className="cadastro-pet-input"
              />
            </div>
          </div>

          <div className="cadastro-pet-linha">
            <div className="cadastro-pet-campo">
              <label className="cadastro-pet-label">Castrado?</label>
              <div className="cadastro-pet-castrado-options">
                <label className="cadastro-pet-castrado-input">
                  <input type="radio" name="castrado" value="nao" required />{" "}
                  Não
                </label>
                <label className="cadastro-pet-castrado-input">
                  <input type="radio" name="castrado" value="sim" required />{" "}
                  Sim
                </label>
              </div>
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="vacinas" className="cadastro-pet-label">
                Se sim, quais?:
              </label>
              <input
                type="text"
                id="vacinas"
                name="vacinas"
                className="cadastro-pet-input"
                required
              />
            </div>

            <div className="cadastro-pet-campo">
              <label htmlFor="foto" className="cadastro-pet-label">
                Foto do pet:
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                className="cadastro-pet-foto"
                required
              />
            </div>
          </div>

          <div className="cadastro-pet-linha cadastro-pet-botao">
            <button type="submit" className="cadastro-pet-button">
              CRIAR CONTA
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
