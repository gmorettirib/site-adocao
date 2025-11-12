import "../../styles/CadastraPet/CadastraPet.css";

export default function CadastraPetContent() {
  return (
    <main>
      <section className="cadastro-container">
        <h2>FICHA DO PET!</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="linha">
            <div className="campo">
              <label htmlFor="nome">Nome (do pet)</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="senha">Descrição:</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Descrição do pet"
                required
              />
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <label htmlFor="cpf">Tamanho (cm):</label>
              <input
                type="text"
                id="Tamanho"
                name="Tamanho"
                maxLength={14}
                placeholder="Tamanho do pet"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="telefone">Peso:</label>
              <input
                type="number"
                id="peso"
                name="peso"
                maxLength={15}
                placeholder="Peso do pet"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="data">Cor:</label>
              <input
                type="text"
                id="cor"
                name="cor"
                placeholder="Cor do pet"
                required
              />
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <label htmlFor="telefone">Tipo:</label>
              <input
                type="text"
                id="tipo"
                name="tipo"
                maxLength={15}
                placeholder="Tipo do pet"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="cep">Raça:</label>
              <input type="text" id="raca" name="raca" maxLength={9} required />
            </div>
          </div>
          <div className="linha">
            <div className="campo">
              <label htmlFor="castrado">Castrado?</label>
              <div className="castrado-options">
                <label htmlFor="" className="castrado-input">
                  <input
                    className="castrado-input"
                    type="radio"
                    id="castrado"
                    name="castrado"
                    value="nao"
                    required
                  />{" "}
                  Não
                </label>
                <label htmlFor="" className="castrado-input">
                  <input
                    type="radio"
                    id="castrado"
                    name="castrado"
                    value="sim"
                    required
                  />{" "}
                  Sim
                </label>
              </div>
            </div>
            <div className="campo">
              <label htmlFor="vacinas">Se sim, quais?:</label>
              <input
                type="text"
                id="vacinas"
                name="vacinas"
                maxLength={9}
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="vacinas" className="">
                Foto do pet:
              </label>
              <input
                className="foto-pet"
                type="file"
                id="vacinas"
                name="vacinas"
                maxLength={9}
                required
              />
            </div>
          </div>
          <div className="linha botao">
            <button type="submit" id="submit">
              CRIAR CONTA
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
