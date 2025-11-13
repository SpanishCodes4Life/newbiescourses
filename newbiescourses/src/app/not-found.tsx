import Image from "next/image"
import Casita from "./webcasitapa.png"
import Link from "next/link"


export default function(){
    return(
    
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Image 
        src={Casita}
        alt="Casita de mi Apa"
        width={780}
        height={580}
        />
      <h1 className="text-4xl font-bold mb-4">Página 404 não encontrada!</h1>
      <p className="text-lg mb-8">Essa página que tentou acessar não existe!</p>

      <Link href="/" className="text-blue-500 hover:underline">
        Voltar para home
      </Link>
    </div>
  );
}