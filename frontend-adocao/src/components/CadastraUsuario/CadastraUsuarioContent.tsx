import "../../styles/CadastraUsuario/CadastraUsuario.css";
import { useState } from "react";

export default function CadastraUsuarioContent() {

  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");


  function formatarCPF(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

  function formatarTelefone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  }

  function formatarCEP(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    return value;
  }

  return (
    <main>
      <section className="cadastro-container">
        <h2>CADASTRE-SE!</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="linha">
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="data">Data de Nascimento:</label>
              <input
                type="date"
                id="data"
                name="data"
                required
              />
            </div>
          </div>

          <div className="linha">
            <div className="campo">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                maxLength={14}
                placeholder="Seu CPF"
                required
                value={cpf}
                onChange={(e) => setCpf(formatarCPF(e.target.value))}
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                maxLength={15}
                placeholder="Telefone"
                required
                value={telefone}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="linha">
            <div className="campo">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                maxLength={9}
                required
                value={cep}
                onChange={(e) => setCep(formatarCEP(e.target.value))}
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
