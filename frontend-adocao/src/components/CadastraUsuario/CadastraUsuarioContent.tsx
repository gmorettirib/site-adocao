import "../../styles/CadastraUsuario/CadastraUsuario.css";
import { useState } from "react";

export default function CadastraUsuarioContent() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [mensagem, setMensagem] = useState("");

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

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !nome ||
      !senha ||
      !dataNascimento ||
      !cpf ||
      !telefone ||
      !email ||
      !cep
    ) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("nome", nome);
      formData.append("senha", senha);
      formData.append("data", dataNascimento);
      formData.append("cpf", cpf.replace(/\D/g, ""));
      formData.append("telefone", telefone.replace(/\D/g, ""));
      formData.append("email", email);
      formData.append("cep", cep.replace(/\D/g, ""));

      const response = await fetch(
        "http://localhost/site-adocao/API/processa_registro.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setMensagem(data.message || "Erro ao cadastrar.");
    } catch (error) {
      setMensagem("Erro na conexão com o servidor.");
      console.error(error);
    }
  };

  return (
    <main className="cadastro-main">
      <section className="cadastro-container">
        <h2 className="cadastro-titulo">CADASTRE-SE!</h2>
        <form className="cadastro-form" onSubmit={handleRegister}>
          <div className="cadastro-linha">
            <div className="cadastro-campo">
              <label htmlFor="nome" className="cadastro-label">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="cadastro-input"
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="senha" className="cadastro-label">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="cadastro-input"
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="data" className="cadastro-label">
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="data"
                name="data"
                required
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="cadastro-input"
              />
            </div>
          </div>

          <div className="cadastro-linha">
            <div className="cadastro-campo">
              <label htmlFor="cpf" className="cadastro-label">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                maxLength={14}
                placeholder="Seu CPF"
                required
                value={cpf}
                onChange={(e) => setCpf(formatarCPF(e.target.value))}
                className="cadastro-input"
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="telefone" className="cadastro-label">
                Telefone:
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                maxLength={15}
                placeholder="Telefone"
                required
                value={telefone}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                className="cadastro-input"
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="email" className="cadastro-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cadastro-input"
              />
            </div>
          </div>

          <div className="cadastro-linha">
            <div className="cadastro-campo">
              <label htmlFor="cep" className="cadastro-label">
                CEP:
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                maxLength={9}
                required
                value={cep}
                onChange={(e) => setCep(formatarCEP(e.target.value))}
                className="cadastro-input"
              />
            </div>
          </div>

          <div className="cadastro-linha cadastro-botao">
            <button type="submit" className="cadastro-button">
              CRIAR CONTA
            </button>
          </div>

          {mensagem && <p className="cadastro-mensagem">{mensagem}</p>}
        </form>
      </section>
    </main>
  );
}
