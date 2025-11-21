import "./Faq.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "COMO POSSO ADOTAR UM PET?",
    answer:
      "Para adotar um pet, basta escolher o pet que mais combina com você, preencher um formulário com seus dados e passar por uma breve entrevista. Depois disso, é só assinar o termo de adoção responsável e levar seu novo amigo para casa com todo carinho e cuidado! ❤️🐾",
  },
  {
    question: "POSSO ADOTAR QUALQUER UM?",
    answer:
      "Você pode adotar praticamente qualquer pet disponível no nosso site! Basta verificar onde o pet está localizado e preencher nosso formulário para confirmar se está apto à adoção. ❤️🐾",
  },
  {
    question: "COMO ACHO ANIMAIS PERTO DE MIM?",
    answer:
      "Para encontrar pets próximos a você, basta acessar nossa aba do Google Maps! Lá você encontra todas as instituições parceiras disponibilizando pets perto de você! ❤️🐾",
  },
  {
    question: "POSSO ADOTAR MAIS DE UM PET?",
    answer:
      "Claro que sim! Você pode adotar quantos pets quiser, desde que esteja dentro das condições necessárias. Cada pet ficará muito feliz com seu novo dono! ❤️🐾",
  },
  {
    question: "POSSO COLOCAR UM PET PARA ADOÇÃO?",
    answer:
      "Se você encontrou um animalzinho perdido ou de rua, é seu dever tentar ajudar! No nosso site, você pode cadastrar pets para adoção e ajudar um novo dono a encontrá-los! ❤️🐾",
  },
];

export default function FaqContent() {
  return (
    <main className="faq-main">
      <div className="faq-container">
        <h1 className="faq-titulo">Perguntas Frequentes</h1>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <details>
                <summary className="faq-summary">
                  <div className="faq-ques">
                    <p>{item.question}</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </summary>

                <div className="faq-ans">
                  <p>{item.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
