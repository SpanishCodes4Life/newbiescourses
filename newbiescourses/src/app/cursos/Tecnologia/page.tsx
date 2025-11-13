'use client'
import React, {useState } from 'react';

import Cards from '../../components/MapCards';
import Categoria from "../../components/Component"
import '../../globals.css'
import estilos from "../cursos.module.css";  

export default function Cursos(){
    
  const [valorInput, setValorInput] = useState<string>("");

  const InputUser = (e: ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
  };

    let cursoscard = [
        {categoria: "Web", nivel: "Iniciante",titulo: "Fundamentos para Desenvolver Soluções CRM em Low-Code",subtitle: "Crie soluções CRM com Salesforce Low-Code",image:"/images/designer.jpg",link: "https://ticemtrilhas.org.br/trail/005cec0d-56a4-45dc-9803-50b4d9501511"},
        {categoria: "Web", nivel: "Iniciante", titulo: "Fundamentos de Orientação a Objetos.",subtitle: "Aprenda como funciona o paradigma da Programação Orientada a Objetos",image:"/images/developer.jpg",link: "https://ticemtrilhas.org.br/trail/6eef3a76-9105-4cfe-9520-2525a27e6507"},
        {categoria: "Web", nivel: "Iniciante", titulo: "Versionamento de Código",subtitle: "Aprenda a trabalhar com códigos de forma colaborativa.", image:"/images/gamer.jpg",link: "https://ticemtrilhas.org.br/trail/946fbd1e-af1b-4a86-8551-440eb269181c"},
        {categoria: "Web", nivel: "Intermediario", titulo: "Conhecendo Recursos Avançados para Low-Code", subtitle: "Crie soluções digitais com plataformas Low-Code",image:"/images/low-code.png",link: "https://ticemtrilhas.org.br/trail/78675926-15cd-4d5f-9a70-08196789c114"},
        {categoria: "Web", nivel: "Avançado", titulo: "Dominando Banco de Dados.", subtitle: "Domine técnicas avançadas de banco de dados.",image: "/images/bancodedados.jpg",link:"https://ticemtrilhas.org.br/trail/163b5e8d-7e95-4e42-96c9-c3a8503da279"},

        {categoria: "Inteligência Artificial",
         nivel: "Iniciante",
         titulo: "Inteligência Artificial e Regulação",
         subtitle: "Entre a ética, a técnica e o direito",
         image:"/images/ia--code.png",
         link:"https://ticemtrilhas.org.br/trail/5df3aa34-e7ec-4343-a804-bb6343cafc69"},
        {
        categoria: "Inteligência Artificial",
        nivel: "Iniciante",
        titulo: "Introdução a Tecnologias Emergentes",
        subtitle: "Desvende tecnologias emergentes e suas aplicações práticas.",
        image: "/images/ia--emergentes.png",
        link: "https://ticemtrilhas.org.br/trail/92981fb8-dd52-4bf2-9a8c-e3b69ed0040d"
    },
    {
        categoria: "Inteligência Artificial",
        nivel: "Iniciante",
        titulo: "Introdução a Machine Learning",
        subtitle: "Aprenda sobre Machine Learning.",
        image: "/images/ia--machineL.png",
        link: "https://ticemtrilhas.org.br/trail/87179c3e-71d5-4619-a84e-ee5f73effce2"
    },
    {
        categoria: "Inteligência Artificial",
        nivel: "Iniciante",
        titulo: "Produtividade na Era da IA Generativa",
        subtitle: "Integre ferramentas e técnicas de IA no seu dia-a-dia.",
        image: "/images/ia--diadia.png",
        link: "https://ticemtrilhas.org.br/trail/9bb8d007-8556-495c-bfa2-2e32bfe5ba2b"
    },
    {
        categoria: "Inteligência Artificial",
        nivel: "Intermediário",
        titulo: "Introdução a LLMs.",
        subtitle: "Explore LLMs e desenvolva com LangChain",
        image: "/images/ia--llm.png",
        link: "https://ticemtrilhas.org.br/trail/4dc77e6f-a048-4bea-9d5e-de4890d31b9b"
    }

    ];

    cursoscard = cursoscard.filter((curso) => {
        if (valorInput.toLocaleLowerCase().trim() === '') {
            return true;
        }

        const TermoBuscaUser = valorInput.trim().toLocaleLowerCase();

        return(
            curso.titulo.toLocaleLowerCase().includes(TermoBuscaUser) ||
            curso.subtitle.toLocaleLowerCase().includes(TermoBuscaUser) ||
            curso.categoria.toLocaleLowerCase().includes(TermoBuscaUser) ||
            curso.nivel.toLocaleLowerCase().includes(TermoBuscaUser)
        )
    }

    );

    return(
        <main className={estilos.containerbisavo}>

            <Categoria nome= "Tecnolgia"></Categoria>

            <nav className={estilos.containeravo}>
                {/*BARRA DE PESQUISA*/}
                <div className={estilos.search}>
                    <label htmlFor="searchInput">
                        <span className={`material-symbols-outlined`}>search</span>
                    </label>
                    <input type="text" id="searchInput" className={estilos.searchInput} placeholder="Pesquisar" value={valorInput} onChange={InputUser}></input>
                    
                </div>
                {/*FIM.*/}

                <article className={estilos.containerpai}>
                    <Cards cards={cursoscard}></Cards>
                </article>
            </nav>
            
        </main>
    )
}