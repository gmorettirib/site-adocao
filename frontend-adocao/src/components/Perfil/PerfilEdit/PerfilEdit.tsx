import "./PerfilEdit.css";

// Define a prop onCancel que o componente vai receber
type PerfilEditProps = {
  onCancel: () => void;
};

export default function PerfilEditContent({ onCancel }: PerfilEditProps) {
  return (
    <section className="bg-container">
      <div className="perfil-card">
        <h2 className="titulo">GERENCIAR PERFIL</h2>

        <form action="#" method="POST" className="perfil-form">
          {/* Campos do formulário */}
          <div className="campo-duplo">
            <div className="campo-nome">
              <label>Nome:</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>
            <div>
              <label>Senha:</label>
              <input type="password" placeholder="********" />
            </div>
          </div>

          <div className="campo-duplo">
            <div>
              <label>Telefone:</label>
              <input type="text" placeholder="(xx) xxxxx-xxxx" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="seuemail@email.com" />
            </div>
          </div>

          <div className="campo">
            <label>Endereço:</label>
            <input type="text" placeholder="Rua, número, bairro, cidade" />
          </div>

          <div className="campo">
            <label>Foto de perfil:</label>
            <input type="file" className="file-input" />
          </div>

          <div className="botoes">
            <button type="submit" className="btn-salvar">
              Salvar alterações
            </button>
            {/* Botão de cancelar agora chama a função passada por props */}
            <button type="button" className="btn-cancelar" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
