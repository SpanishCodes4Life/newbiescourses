'use client'
{/*VOCÊ PODE APENAS COPIAR O CÓDIGO ABAIXO E CRIAR SEU COMPONENTE E LINKAR OUUUUU
DEIXAR TUDO NUMA PÁGINA SÓ, 
    */}
import React, {useState } from 'react';

import Card from '../../components/MapCards';
import { useState, ChangeEvent } from "react";
import '../../globals.css'
import estilos from "../cursos.module.css";  

export default function Cursos(){
    
  const [valorInput, setValorInput] = useState<string>("");

  const InputUser = (e: ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
  };

    let cursoscard = [
    {
        categoria: "Inglês",
        nivel: "Iniciante",
        titulo: "Aprenda desde zero:cumprimentos,alfabetos, números e frases do dia a dia. Ganhe confiança para começar a se a comunicar em inglês.",
        subtitle: "Ganhe confiança para começar a se a comunicar em inglês.",
        image: "/images/ingles.png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Inglês",
        nivel: "Intermediário",
        titulo: "Aprimore sua comunicação: aprenda aformar frase mais completas, usar tempos,verbais e se expressar em situações do dia a dia com mais confiança.",
        subtitle: "se expressar em situações do dia a dia com mais confiança.",
        image: "/images/ingles (1).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Inglês",
        nivel: "Avançado",
        titulo: "Aprimore a fluência: desenvolva vocabulário avançado,entenda filmes, série e artigos em inglês, além de se comunicar com segurança em qualquer situação",
        subtitle: "em inglês, além de se comunicar com segurança em qualquer situação",
        image: "/images/ingles (2).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Inglês",
        nivel: "Fluente",
        titulo: "Comunique-se como um nativo: entenda nuances, expressões idiomáticas e domine a língua em qualquer contexto, peesoal ou profissional",
        subtitle: "língua em qualquer contexto, peesoal ou profissional",
        image: "/images/ingles (3).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Inglês",
        nivel: "Especialização",
        titulo: "A pós alcançar a fluência, é hora de direcionar seu inglês para objetivos específicos: negócios,tecnologia,medicina,direito ou área acadêmica.Desenvolva vocabulário técnico e aprenda se comunicar de forma precisa no seu campo de atuação.",
        subtitle: "de forma precisa no seu campo de atuação.",
        image: "/images/ingles (4).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Espanhol",
        nivel: "Iniciante",
        titulo: "Aprenda desde zero:cumprimentos,alfabetos, números e frases do dia a dia. Ganhe confiança para começar a se a comunicar em espanhol",
        subtitle: "Ganhe confiança para começar a se a comunicar em espanhol",
        image: "/images/espanhol.png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Espanhol",
        nivel: "Intermediário",
        titulo: "Aprimore sua comunicação: aprenda aformar frase mais completas, usar tempos,verbais e se expressar em situações do dia a dia com mais confiança.",
        subtitle: "se expressar em situações do dia a dia com mais confiança.",
        image: "/images/espanhol (1).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Espanhol",
        nivel: "Avançado",
        titulo: "Aprimore a fluência: desenvolva vocabulário avançado,entenda filmes, série e artigos em espanhol, além de se comunicar com segurança em qualquer situação",
        subtitle: "em espanhol, além de se comunicar com segurança em qualquer situação",
        image: "/images/espanhol (2).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Espanhol",
        nivel: "Fluente",
        titulo: "Comunique-se como um nativo: entenda nuances, expressões idiomáticas e domine a língua em qualquer contexto, peesoal ou profissional",
        subtitle: "língua em qualquer contexto, peesoal ou profissional",
        image: "/images/espanhol (3).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    },
    {
        categoria: "Espanhol",
        nivel: "Especialização",
        titulo: "Essa é uma excelente estratégia! Focar em um espanhol para fins específicos depois de atingir a fluência geral é o passo ideal para se tornar um profissional de alto nível na sua área. Para te ajudar a começar, que tal explorarmos alguns recursos e caminhos para o seu objetivo?",
        subtitle: "Para te ajudar a começar, que tal explorarmos alguns recursos e caminhos para o seu objetivo?",
        image: "/images/espanhol (4).png",
        link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
    }
]


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
                    <Card cards={cursoscard}></Card>
                </article>
            </nav>
            
        </main>
    )
}