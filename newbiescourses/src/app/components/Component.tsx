import localfont from 'next/font/local';

const MyFont = localfont({
      src:'../fonts/Futura Extra Black font.ttf'
    })

export default function CategoriaText({nome}){
    
    
    return (
        <section className={MyFont.className}>
            <h1>Olá, Bem vindo a página de {nome}</h1>
            <h2>Escolha seu cursos de Acordo com seu interesse !!!</h2>
        </section>
    )
}