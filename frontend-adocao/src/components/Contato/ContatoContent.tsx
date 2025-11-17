import "../../styles/Contato/Contato.css";

export default function ContatoContent() {
  return (
    <main className="contato-main">
      <div className="contato-form-container">
        <div className="contato-titulo">
          <h2 className="contato-heading">ENTRE EM CONTATO COM O CUIDADOR DO SEU FUTURO PET</h2>
        </div>
        <h2 className="contato-subheading">Preencha seus Dados:</h2>
        <form className="contato-form">
          <label htmlFor="nome" className="contato-label">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            className="contato-input"
            required
          />

          <label htmlFor="email" className="contato-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            className="contato-input"
            required
          />

          <label htmlFor="telefone" className="contato-label">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            className="contato-input"
            required
          />

          <button type="submit" className="contato-button">Enviar</button>
        </form>
      </div>
    </main>
  );
}
