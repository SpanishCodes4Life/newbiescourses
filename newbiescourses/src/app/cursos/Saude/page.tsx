'use client'
{/*VOCÊ PODE APENAS COPIAR O CÓDIGO ABAIXO E CRIAR SEU COMPONENTE E LINKAR OUUUUU
DEIXAR TUDO NUMA PÁGINA SÓ, 
    */}
import React, {useState } from 'react';

import Card from '../../components/MapCards';
import '../../globals.css'
import estilos from "../cursos.module.css";  

export default function Cursos(){
    
  const [valorInput, setValorInput] = useState<string>("");

  const InputUser = (e: ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
  };

    let cursoscard = [
    {
        categoria: "Livre",
        nivel: "Iniciante",
        titulo: "Antroposofia Aplicada à Saúde",
        subtitle: "Você aprenderá a fazer manobras de massagem rítmica associada à fitoterapia antroposófica para promover saúde e bem-estar, de acordo com a necessidade de cada cliente.",
        image: "/images/antroposofia.webp",
        link: "https://www.sp.senac.br/cursos-livres/curso-de-antroposofia-aplicada-a-saude"
    },
    {
        categoria: "Livre",
        nivel: "Iniciante",
        titulo: "Argiloterapia: um recurso natural geoterapêutico",
        subtitle: "Você aprenderá a avaliar a pele, indicar o procedimento necessário, aplicar a argila e orientar clientes sobre cuidados e manutenção no pós-atendimento.",
        image: "/images/argiloterapia.webp",
        link: "https://www.sp.senac.br/cursos-livres/curso-de-argiloterapia-um-recurso-natural-geoterapeutico"
    },
    {
        categoria: "Livre",
        nivel: "Iniciante",
        titulo: "Aromaterapia",
        subtitle: "Você aprenderá a usar os óleos essenciais e conhecerá seus benefícios e efeitos energéticos para a saúde, o bem-estar e a aplicação do marketing olfativo.",
        image: "/images/aromaterapia.webp",
        link: "https://www.sp.senac.br/cursos-livres/curso-de-aromaterapia"
    },
    {
        categoria: "Livres",
        nivel: "Iniciante",
        titulo: "Avaliação da Saúde do Cliente em Massoterapia",
        subtitle: "Você aprenderá a avaliar as condições de saúde e os hábitos dos clientes em massoterapia, identificando grupos musculoesqueléticos, articulares e pele.",
        image: "/images/massoterapia.webp",
        link: "https://www.sp.senac.br/cursos-livres/curso-de-avaliacao-da-saude-do-cliente-em-massoterapia"
    },
    {
        categoria: "Livre",
        nivel: "Iniciante",
        titulo: "Auriculoterapia Integrada",
        subtitle: "Você aprenderá a realizar aplicação de protocolos de atendimento em auriculoterapia, integrando técnicas, ferramentas e materiais para aplicações em pontos da orelha.",
        image: "/images/auriculoterapia.webp",
        link: "https://www.sp.senac.br/cursos-livres/curso-de-auriculoterapia-integrada"
    },
    {
        categoria: "Técnico",
        nivel: "Intermediário",
        titulo: "Técnico em Podologia.",
        subtitle: "Você aprenderá a prevenir e tratar problemas recorrentes nas unhas e nos pés, buscando a promoção da saúde e do bem-estar.",
        image: "/images/podologia.webp",
        link: "https://www.sp.senac.br/cursos-tecnicos/curso-tecnico-em-podologia"
    },
    {
        categoria: "Técnico",
        nivel: "Intermediário",
        titulo: "Técnico em Estética",
        subtitle: "Você aprenderá a realizar procedimentos faciais e corporais, avaliar as condições da pele e usar as técnicas mais adequadas para cada caso.",
        image: "/images/estetica.webp",
        link: "https://www.sp.senac.br/cursos-tecnicos/curso-tecnico-em-estetica"
    },
    {
        categoria: "Técnico",
        nivel: "Intermediário",
        titulo: "Técnico em Massoterapia",
        subtitle: "Você aprenderá a aplicar técnicas de massoterapia baseadas em princípios e práticas ocidentais e orientais, que buscam a promoção da saúde e do equilíbrio físico e emocional.",
        image: "/images/massoterapia.webp",
        link: "https://www.sp.senac.br/cursos-tecnicos/curso-tecnico-em-massoterapia"
    },
    {
        categoria: "Técnico",
        nivel: "Intermediário",
        titulo: "Especialização Técnica em Atendimento Podológico ao Paciente com Diabetes",
        subtitle: "Você aprofundará conhecimentos nos processos de prevenção e tratamento podológico de pessoas com diabetes.",
        image: "/images/diabetes.webp",
        link: "https://www.sp.senac.br/cursos-tecnicos/curso-especializacao-tecnica-em-atendimento-podologico-ao-paciente-com-diabetes"
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