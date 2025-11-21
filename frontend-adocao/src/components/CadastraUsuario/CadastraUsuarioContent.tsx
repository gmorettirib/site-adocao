import { useState } from "react";
import "./CadastraUsuario.css";

export default function CadastraUsuarioContent() {
  const [form, setForm] = useState({
    nome: "",
    senha: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    email: "",
    cep: "",
  });

  const [mensagem, setMensagem] = useState("");

  // -----------------------------
  // FORMATADORES
  // -----------------------------

  function formatarCPF(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function formatarTelefone(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  function formatarCEP(value: string) {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2");
  }

  // -----------------------------
  // HANDLERS DE INPUT
  // -----------------------------

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cpf") formattedValue = formatarCPF(value);
    if (name === "telefone") formattedValue = formatarTelefone(value);
    if (name === "cep") formattedValue = formatarCEP(value);

    setForm((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  }

  // -----------------------------
  // SUBMIT
  // -----------------------------

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const camposVazios = Object.values(form).some((v) => v.trim() === "");

    if (camposVazios) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("nome", form.nome);
      formData.append("senha", form.senha);
      formData.append("data", form.dataNascimento);
      formData.append("cpf", form.cpf.replace(/\D/g, ""));
      formData.append("telefone", form.telefone.replace(/\D/g, ""));
      formData.append("email", form.email);
      formData.append("cep", form.cep.replace(/\D/g, ""));

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
      console.error(error);
      setMensagem("Erro na conexão com o servidor.");
    }
  }

  // -----------------------------
  // JSX PRINCIPAL
  // -----------------------------

  return (
    <main className="cadastro-main">
      <section className="cadastro-container">
        <h2 className="cadastro-titulo">CADASTRE-SE!</h2>

        <form className="cadastro-form" onSubmit={handleRegister}>
          {/* LINHA 1 */}
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
                value={form.nome}
                onChange={handleChange}
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
                required
                value={form.senha}
                onChange={handleChange}
                className="cadastro-input"
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="dataNascimento" className="cadastro-label">
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                required
                value={form.dataNascimento}
                onChange={handleChange}
                className="cadastro-input"
              />
            </div>
          </div>

          {/* LINHA 2 */}
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
                required
                value={form.cpf}
                onChange={handleChange}
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
                required
                value={form.telefone}
                onChange={handleChange}
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
                required
                value={form.email}
                onChange={handleChange}
                className="cadastro-input"
              />
            </div>
          </div>

          {/* LINHA 3 */}
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
                value={form.cep}
                onChange={handleChange}
                className="cadastro-input"
              />
            </div>
          </div>

          {/* BOTÃO */}
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
