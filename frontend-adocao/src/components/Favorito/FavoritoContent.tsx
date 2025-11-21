import { useState } from "react";
import "./Favorito.css";

type PetCard = {
  id: number;
  nome: string;
  img: string;
};

const cardsData: PetCard[] = [
  { id: 1, nome: "Max & Rex", img: "/img/maxerex.jpg" },
  { id: 2, nome: "Timoty", img: "/img/miuaimiau2.jpg" },
  { id: 3, nome: "Peter & Nick", img: "/img/dogemiau.webp" },
];

export default function FavPage() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function toggleFavorito(id: number) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  return (
    <div className="cards-container">
      {cardsData.map((card) => {
        const isFavorito = favoritos.includes(card.id);

        return (
          <div className="card" key={card.id}>
            <button
              className={`favorite-btn ${isFavorito ? "active" : ""}`}
              onClick={() => toggleFavorito(card.id)}
              aria-label="Favoritar"
            >
              <span className="star">{isFavorito ? "⭐" : "☆"}</span>
            </button>

            <img src={card.img} alt={card.nome} className="card-img" />

            <h2 className="card-title">{card.nome}</h2>

            <button className="contact-btn">ENTRE EM CONTATO 💌</button>
          </div>
        );
      })}
    </div>
  );
}
