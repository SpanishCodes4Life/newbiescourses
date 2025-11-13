import Link from "next/link";
import Image from 'next/image'
import estilos from '../cursos/cursos.module.css';

export default function Card({cards}) {
    return(
        cards.map((card,index) => (
            <div>
                <Link href={card.link} className={estilos.linkcard}>
                <div className={estilos.imagemcard}>
                                    <Image 
                                    src={card.image}
                                    alt="ImagemWeb"
                                    fill={true}
                                    style={{objectFit: 'cover', borderRadius:'10px', aspectRatio: '16/9'}}
                                    />
                                    </div>
                                    <p>{card.categoria}</p>
                                    <p>{card.nivel}</p>
                                    <h2>{card.titulo}</h2>
                                    <h3>{card.subtitle}</h3>
                </Link>
            </div>
        ))
    )
}