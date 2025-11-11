import { useState } from "react";
import "../../styles/Login/LoginContent.css";
export default function LoginContent() {
  const [cpf, setCpf] = useState("");

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  }

  return (
    <main>
      <section className="login-container">
        <h2 className="titulo-login">FAÇA SEU LOGIN</h2>
        <div>
          <form action="processa_login.php" method="POST">
            <label htmlFor="Cpf" className="form-label">
              CPF:
            </label>
            <input
              className="form-control"
              type="text"
              id="cpf"
              name="cpf"
              maxLength={14}
              placeholder="CPF"
              required
              value={cpf}
              onChange={handleCpfChange}
            />

            <label htmlFor="Senha" className="form-label">
              Senha:
            </label>
            <input
              className="form-control"
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              required
            />
            <button type="submit">FAZER LOGIN</button>
          </form>
          <div className="nao-tem-conta">
            <p className="p-cadastre-se">Não possui conta?</p>
            <a href="/cadastra" className="cadastra-se">
              CADASTRE-SE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
