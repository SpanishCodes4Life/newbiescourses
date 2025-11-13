'use client'
import React, {useState } from 'react';
import Card from '../../components/MapCards';
import '../../globals.css'
import estilos from "../cursos.module.css";  

export default function Cursos(){
    
    const [valorInput, setValorInput] = useState('');

    const InputUser = (e) => {
        setValorInput(e.target.value);
    };

    let cursoscard = [
        {
            categoria: "Marketing",
            nivel: "Iniciante",
            titulo: "Como vender com redes sociais?",
            subtitle: "Aprenda a usar redes sociais para vender mais, criar campanhas e engajar seu público com conteúdo que converte.",
            image: "/images/img4.png",
            link: "https://orango.senac.br/inicio/cursos/como-vender-com-redes-sociais/"
        },
        {
            categoria: "Marketing",
            nivel: "Iniciante",
            titulo: "Automação de conversas com chatbots",
            subtitle: "Aprenda a criar chatbots de forma simples, sem precisar programar, e transforme suas conversas em estratégias inteligentes para atrair, engajar e converter clientes.",
            image: "/images/img3.png",
            link: "https://orango.senac.br/inicio/cursos/automacao-de-conversas-com-chatbots/"
        },
        {
            categoria: "Marketing",
            nivel: "Iniciante",
            titulo: "Marketing de produtos: posicione, lance e conquiste clientes",
            subtitle: "Aprenda a criar marcas relevantes, planejar lançamentos estratégicos e gerar conexões duradouras com seus consumidores.",
            image: "/images/img2.png",
            link: "https://orango.senac.br/inicio/cursos/marketing-de-produtos-posicione-lance-e-conquiste-clientes/"
        },
        {
            categoria: "Marketing",
            nivel: "Iniciante",
            titulo: "Crises online e gestão de reputação digital",
            subtitle: "Aprenda a identificar e gerenciar crises no ambiente digital com responsabilidade, estratégia e agilidade. Proteja sua marca e conserve a confiança do seu público.",
            image: "/images/img1.png",
            link: "https://orango.senac.br/inicio/cursos/crise-online-gestao-reputacao-digital/"
        },
        {
            categoria: "Marketing",
            nivel: "Iniciante",
            titulo: "Marketing digital descomplicado para redes sociais",
            subtitle: "Entenda como divulgar marcas e conteúdos online! Aprenda estratégias, hacks e planejamento para crescer nas redes sociais",
            image: "/images/img.webp",
            link: "https://orango.senac.br/inicio/cursos/marketing-digital-descomplicado-para-redes-sociais/"
        },
        {
            categoria: "Empreededorismo",
            nivel: "Iniciante",
            titulo: "Fundamentos do empreendedorismo digital",
            subtitle: "Transforme suas ideias em empresas inovadoras. Entenda os princípios do empreendedorismo digital, modelos de negócios desruptivos e estratégias para startups.",
            image: "/images/img5.png",
            link: "https://aprendamais.mec.gov.br/course/index.php?categoryid=7&browse=courses&perpage=20&page=0"
        },
        {
            categoria: "Empreededorismo",
            nivel: "Iniciante",
            titulo: "Inovação em movimento: IA no empreendedorismo e no comércio",
            subtitle: "Transforme suas ideias em empresas inovadoras. Entenda os princípios do empreendedorismo digital, modelos de negócios desruptivos e estratégias para startups.",
            image: "/images/img6.png",
            link: "https://orango.senac.br/inicio/cursos/inovacao-ia-empreendedorismo-comercio/"
        },
        {
            categoria: "Empreededorismo",
            nivel: "Iniciante",
            titulo: "Inovação empreendedora: ferramentas para criar o futuro",
            subtitle: "Transforme suas ideias em empresas inovadoras. Entenda os princípios do empreendedorismo digital, modelos de negócios desruptivos e estratégias para startups.",
            image: "/images/img7.webp",
            link: "https://orango.senac.br/inicio/cursos/inovacao-empreendedora-ferramentas-para-criar-o-futuro/"
        },
        {
            categoria: "Empreededorismo",
            nivel: "Iniciante",
            titulo: "Da ideia ao protótipo: validação rápida para empreendedores",
            subtitle: "Transforme sua ideia em produto! Saiba como reduzir riscos ao criar um protótipo de maneira eficiente e como validar suas ideias sem perder tempo nem dinheiro.",
            image: "/images/img8.png",
            link: "https://orango.senac.br/inicio/cursos/prototipo-validacao-rapida-empreendedores/"
        },
        {
            categoria: "Empreededorismo",
            nivel: "Iniciante",
            titulo: "Empreender com propósito: digital, social e sustentável",
            subtitle: "Aprenda a transformar ideias em projetos com propósito, aproveitando o digital para criar negócios sustentáveis e de impacto social.",
            image: "/images/img9.png",
            link: "https://orango.senac.br/inicio/cursos/empreender-com-proposito-digital-social-e-sustentavel/"
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
    });

    return(
        <main className={estilos.containerbisavo}>
            <nav className={estilos.containeravo}>
                {/*BARRA DE PESQUISA*/}
                <div className={estilos.search}>
                    <label htmlFor="searchInput">
                        <span className="material-symbols-outlined">search</span>
                    </label>
                    <input 
                        type="text" 
                        id="searchInput" 
                        className={estilos.searchInput} 
                        placeholder="Pesquisar" 
                        value={valorInput} 
                        onChange={InputUser}
                    />
                </div>
                {/*FIM.*/}

                <article className={estilos.containerpai}>
                    <Card cards={cursoscard}></Card>
                </article>
            </nav>
        </main>
    )
}

