import "../../styles/Faq/Faq.css";

export default function FaqContent() {
  return (
    <main className="faq-main">
      <div className="faq-container">
        <h1 className="faq-titulo">Perguntas Frequentes</h1>
        <div className="faq-list">
          <div className="faq-item">
            <details>
              <summary className="faq-summary">
                <div className="faq-ques">
                  <p>COMO POSSO ADOTAR UM PET??</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </summary>
              <div className="faq-ans">
                <p>
                  Para adotar um pet, basta escolher o pet que mais combina com
                  você, preencher um formulário com seus dados e passar por uma
                  breve entrevista. <br /> Depois disso, é só assinar o termo de
                  adoção responsável e levar seu novo amigo para casa com todo
                  carinho e cuidado! ❤️🐾
                </p>
              </div>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary className="faq-summary">
                <div className="faq-ques">
                  <i className="fa-solid fa-arrow-right"></i>
                  <p>POSSO ADOTAR QUALQUER UM??</p>
                </div>
              </summary>
              <div className="faq-ans">
                <p>
                  Você pode adotar praticamente qualquer pet que está disponível
                  no nosso site! <br />
                  Basta ver onde se localiza o pet, preencher o nosso formulário
                  para ver se está apto para a adoção. Cuide bem do seu pet!
                  ❤️🐾
                </p>
              </div>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary className="faq-summary">
                <div className="faq-ques">
                  <p>COMO ACHO ANIMAIS PERTO DE MIM??</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </summary>
              <div className="faq-ans">
                <p>
                  Para achar pets perto de você, basta acessar a nossa aba do
                  Google Maps! <br />
                  Lá você encontra todas as nossas instituições parceiras,
                  disponibilizando um pet pertinho de você!! ❤️🐾
                </p>
              </div>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary className="faq-summary">
                <div className="faq-ques">
                  <p>POSSO ADOTAR MAIS DE UM PET??</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </summary>
              <div className="faq-ans">
                <p>
                  Claro que sim! Pode adotar quantos pets quiser, se estiver
                  dentro das condições necessárias, é claro! <br /> Cada pet vai
                  ser muito feliz com seu dono, e você estará ajudando muitos!
                  ❤️🐾
                </p>
              </div>
            </details>
          </div>

          <div className="faq-item">
            <details>
              <summary className="faq-summary">
                <div className="faq-ques">
                  <p>POSSO COLOCAR UM PET PARA ADOÇÃO??</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </summary>
              <div className="faq-ans">
                <p>
                  Se você achou algum animalzinho perdido ou de rua, é o seu
                  dever anunciar ele no nosso site! <br /> Sim, você pode
                  colocar pets para a adoção, para um novo dono encontrá-los e
                  cuidá-los!! ❤️🐾
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
