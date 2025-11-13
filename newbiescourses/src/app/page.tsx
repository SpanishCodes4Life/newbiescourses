"use client";

import Image from "next/image";
import Link from "next/link";
import estilos from "./home.module.css";
import AnunciosLateral from "./components/anunciosLaterais";

export default function Home() {
  const tema = [
    { icon: "💘", nome: "Saúde e Bem-Estar", texto: "Venha conhecer diversos cursos relacionados a Yoga e Práticas para o Bem-Estar de sua Saúde!", linkRota: "/cursos/Saude" },
    { icon: "🖥️", nome: "Tecnologia", texto: "Venha conhecer diversos cursos de Tecnologia para impulsionar sua carreira para frente!", linkRota: "/cursos/Tecnologia" },
    { icon: "📚", nome: "Idiomas", texto: "Aprenda inglês, espanhol, francês e outros idiomas gratuitamente.", linkRota: "/cursos/Idiomas" },
    { icon: "🛒💻", nome: "E-commerce", texto: "Monte sua loja online, use marketplaces e ferramentas de vendas.", linkRota: "/cursos/Ecommerce" }
  ];

  return (
    <>
      <div className={estilos.banner}>
        <Image
          src="/imagemCurso.jpg"
          alt="Banner Cursos"
          width={1200}
          height={500}
          className={estilos.bannerImg}
          priority
        />
        <div className={estilos.bannerTexto}>
          <h1>Aprenda como e onde quiser, sem pagar nada!</h1>
          <h3>Aprenda com os melhores em diversas áreas.</h3>
        </div>
      </div>

      {/* CONTAINER GERAL COM DUAS COLUNAS */}
      <div className={estilos.layoutPrincipal}>
        {/* Coluna Esquerda (Anúncios) */}
        <aside className={estilos.lateral}>
          <AnunciosLateral />
        </aside>

        {/* Coluna Direita (Cursos) */}
        <main className={estilos.containerpaitemas}>
          <section className={estilos.containertemas}>
            {tema.map((tema, index) => (
              <section key={index} className={estilos.temacard}>
                <h1>{tema.icon}</h1>
                <h2>{tema.nome}</h2>
                <p>{tema.texto}</p>
                <Link href={tema.linkRota} className={estilos.link}>
                  Saiba Mais
                </Link>
              </section>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
