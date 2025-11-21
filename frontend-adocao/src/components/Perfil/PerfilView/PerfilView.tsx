// PerfilView.tsx
import "./PerfilView.css";

// Definindo as props que o componente aceita
type PerfilViewProps = {
  onEdit: () => void; // função para alternar para edição
};

export default function PerfilViewContent({ onEdit }: PerfilViewProps) {
  return (
    <section className="bg-container">
      <div className="perfil-card">
        <div className="foto-container">
          <img
            src="../projeto/img/dri.jpg"
            alt="Foto do usuário"
            className="foto-perfil"
          />
        </div>

        <h2 className="nome-usuario">Adriano Bendazzoli</h2>

        <div className="info-container">
          <p>
            <strong>Email:</strong> adriano@email.com
          </p>
          <p>
            <strong>Telefone:</strong> (11) 91234-5678
          </p>
          <p>
            <strong>Endereço:</strong> Rua Exemplo, 123 - Bairro, Cidade
          </p>
        </div>

        <div className="botoes">
          {/* Botão que chama a função passada por props */}
          <button type="button" className="btn-editar" onClick={onEdit}>
            Editar Perfil
          </button>
          <a href="#" className="btn-sair">
            Sair
          </a>
        </div>
      </div>
    </section>
  );
}
