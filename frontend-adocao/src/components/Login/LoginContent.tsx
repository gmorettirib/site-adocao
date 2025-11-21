import "./LoginContent.css";
import { useState } from "react";

export default function LoginContent() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const formatarCPF = (value: string) => {
    value = value.replace(/\D/g, "");

    if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 6) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 9) value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return value;
  };

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(formatarCPF(e.target.value));
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cpf.trim() || !senha.trim()) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("cpf", cpf.replace(/\D/g, ""));
      params.append("senha", senha);

      const response = await fetch(
        "http://localhost/site-adocao/API/processa_login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params,
        }
      );

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem("usuario", JSON.stringify(data.usuario));
        setMensagem(data.message);
        window.location.href = "/home";
      } else {
        setMensagem(data.message);
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Erro na conexão com o servidor.");
    }
  };

  return (
    <main>
      <section className="login-container">
        <h2 className="titulo-login">FAÇA SEU LOGIN</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="cpf" className="form-label">
            CPF:
          </label>
          <input
            className="form-control"
            type="text"
            id="cpf"
            placeholder="CPF"
            maxLength={14}
            required
            value={cpf}
            onChange={handleCpfChange}
          />

          <label htmlFor="senha" className="form-label">
            Senha:
          </label>
          <input
            className="form-control"
            type="password"
            id="senha"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">FAZER LOGIN</button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="nao-tem-conta">
          <p className="p-cadastre-se">Não possui conta?</p>
          <a href="/cadastraUsuario" className="cadastra-se">
            CADASTRE-SE
          </a>
        </div>
      </section>
    </main>
  );
}
