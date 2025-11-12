import "../../styles/Contato/Contato.css";
export default function ContatoContent() {
  return (
    <main>
      <div className="form-container">
        <div className="titulo">
          <h2>ENTRE EM CONTATO COM O CUIDADOR DO SEU FUTURO PET </h2>
        </div>
        <h2>Preencha seus Dados:</h2>
        <form>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            required
          />

          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            required
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
