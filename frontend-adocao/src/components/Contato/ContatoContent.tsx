import { useState } from "react";
import "./Contato.css";

export default function ContatoContent() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Dados enviados:", formData);

    // Aqui futuramente você envia para API
  }

  return (
    <main className="contato-main">
      <div className="contato-form-container">
        <div className="contato-titulo">
          <h2 className="contato-heading">
            ENTRE EM CONTATO COM O CUIDADOR DO SEU FUTURO PET
          </h2>
        </div>

        <h2 className="contato-subheading">Preencha seus Dados:</h2>

        <form className="contato-form" onSubmit={handleSubmit}>
          <label htmlFor="nome" className="contato-label">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            className="contato-input"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="contato-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            className="contato-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefone" className="contato-label">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            className="contato-input"
            value={formData.telefone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contato-button">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
