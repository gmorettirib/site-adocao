import { useState } from "react";
import "../../styles/Login/LoginContent.css";

export default function LoginContent() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  }

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cpf || !senha) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("cpf", cpf.replace(/\D/g, ""));
      formData.append("senha", senha);

      const response = await fetch("http://localhost/site-adocao/API/processa_login.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `cpf=${encodeURIComponent(cpf.replace(/\D/g, ""))}&senha=${encodeURIComponent(senha)}`,
});


      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem("usuario", JSON.stringify(data.usuario));
        setMensagem(data.message);
        window.location.href = "/home";
      } else {
        setMensagem(data.message);
      }
    } catch (error) {
      setMensagem("Erro na conexão com o servidor.");
      console.error("Erro:", error);
    }
  };


  return (
    <main>
      <section className="login-container">
        <h2 className="titulo-login">FAÇA SEU LOGIN</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="cpf" className="form-label">CPF:</label>
          <input
            className="form-control"
            type="text"
            id="cpf"
            placeholder="CPF"
            required
            maxLength={14}
            value={cpf}
            onChange={handleCpfChange}
          />

          <label htmlFor="senha" className="form-label">Senha:</label>
          <input
            className="form-control"
            type="password"
            id="senha"
            placeholder="Senha"
            required
            value={senha}
            onChange={handleSenhaChange}
          />

          <button type="submit">FAZER LOGIN</button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="nao-tem-conta">
          <p className="p-cadastre-se">Não possui conta?</p>
          <a href="/cadastraUsuario" className="cadastra-se">CADASTRE-SE</a>
        </div>
      </section>
    </main>
  );
}
