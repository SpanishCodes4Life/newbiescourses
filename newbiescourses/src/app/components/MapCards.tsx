import localfont from "next/font/local";

const MyFont = localfont({
  src: "../fonts/Futura Extra Black font.ttf",
});

export default function CategoriaText({ nome }: { nome: string }) {
  return (
    <section className={MyFont.className}>
      <h1>Olá, Bem vindo à página de {nome}</h1>
      <h2>Escolha seu curso de acordo com seu interesse !!!</h2>
    </section>
  );
}
