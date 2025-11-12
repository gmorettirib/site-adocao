import "../../styles/CadastraPet/CadastraPet.css";
import "../../styles/CadastraUsuario/CadastraUsuario.css";

export default function CadastraPetContent() {
  return (
    <main>
      <section className="cadastra-container max-w-4xl mx-auto mt-12 bg-purple-700/90 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-purple-200 mb-8">
          FICHA DO PET!
        </h1>

        <form
          className="space-y-6"
          action="http://localhost/site-adocao/projeto/php/processa_cadastro_pet.php"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Nome (do pet):</label>
              <input
                type="text"
                name="nome"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Descrição:</label>
              <input
                type="text"
                name="descricao"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">Cor:</label>
              <input
                type="text"
                name="cor"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tamanho (cm):</label>
              <input
                type="number"
                name="tamanho"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Peso:</label>
              <input
                type="number"
                name="peso"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-end">
            <div>
              <label className="block font-semibold mb-1">Castrado?</label>
              <div className="flex gap-3 mb-3">
                <label className="flex items-center gap-1">
                  <input type="radio" name="castrado" value="nao" /> Não
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="castrado" value="sim" /> Sim
                </label>
              </div>

              <label className="block font-semibold mb-1">Se sim, quais?</label>
              <input
                type="text"
                name="vacinas"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>

            <div className="self-end">
              <label className="block font-semibold mb-1">Foto do pet:</label>
              <input
                type="file"
                name="foto"
                accept="image/*"
                className="w-full text-gray-800 bg-white rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Tipo:</label>
              <input
                type="text"
                name="tipo"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Raça:</label>
              <input
                type="text"
                name="raca"
                className="w-full rounded-md p-2 text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-300 hover:bg-purple-400 text-purple-900 font-semibold px-6 py-2 rounded-full transition"
            >
              CADASTRAR PET
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
