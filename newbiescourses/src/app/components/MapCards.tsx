import Link from "next/link";
import Image from "next/image";
import estilos from "../cursos/cursos.module.css";

interface CardItem {
  link: string;
  image: string;
  categoria: string;
  nivel: string;
  titulo: string;
  subtitle: string;
}

interface CardProps {
  cards: CardItem[];
}

export default function Card({ cards }: CardProps) {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index}>
          <Link href={card.link} className={estilos.linkcard}>
            <div className={estilos.imagemcard}>
              <Image
                src={card.image}
                alt="ImagemWeb"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  aspectRatio: "16/9",
                }}
              />
            </div>
            <p>{card.categoria}</p>
            <p>{card.nivel}</p>
            <h2>{card.titulo}</h2>
            <h3>{card.subtitle}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}
