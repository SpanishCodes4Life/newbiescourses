"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AnunciosLateral.module.css";

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function AnunciosLateral() {
  const [anuncio, setAnuncio] = useState<Produto | null>(null);

  async function carregarAnuncio() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Produto[] = await res.json();
      const random = data[Math.floor(Math.random() * data.length)];
      setAnuncio(random);
    } catch (error) {
      console.error("Erro ao carregar anúncio:", error);
    }
  }

  useEffect(() => {
    carregarAnuncio(); // primeiro carregamento
    const intervalo = setInterval(carregarAnuncio, 10000); // troca a cada 10s
    return () => clearInterval(intervalo);
  }, []);

  if (!anuncio) return null;

  return (
    <aside className={styles.container}>
      <h4> Anúncio</h4>
      <div className={styles.card}>
        <Image
          src={anuncio.image}
          alt={anuncio.title}
          width={150}
          height={150}
          style={{ borderRadius: "8px", objectFit: "contain" }}
        />
        <p>{anuncio.title}</p>
        <strong>R$ {anuncio.price}</strong>
      </div>
    </aside>
  );
}
