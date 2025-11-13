import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import localfont from 'next/font/local'

const MyFont = localfont({
  src:'/fonts/Futura Extra Black font.ttf'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/*  Banner fixo no topo */}
        <div className="banner">
          <p> Explore cursos gratuitos e aprenda no seu ritmo!</p>
        </div>

        {/*  Header */}
        <header className="header">
          <div className="logo">
            <Link href="/"> {/* link na logo ligado ao home*/}
              <Image
                src="/logoHome.png"
                alt="Logo MultiCursos"
                width={60}
                height={60}
                className="logo-img"
              />
            </Link>
          </div>
          <h1 className={MyFont.className}>MultiCursos</h1>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>
        </header>

        {/*  Conteúdo da página */}
        <main>{children}</main>

        {/*  Footer */}
        <footer className="footer">
          <p>©2025 MultiCursos - Todos os direitos reservados.</p>
          <a href="https://www.instagram.com/badbunnypyr" target="_blank">Instagram</a> |{" "}
          <a href="https://wa.me/123456789" target="_blank">WhatsApp</a> |{" "}
          <a href="https://www.youtube.com/@tictrelinhas" target="_blank">YouTube</a> |{" "}
          <Link href="/gatinhos">Gatinhos.</Link>
          
        </footer>
      </body>
    </html>
  );
}
