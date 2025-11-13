"use client"; 

import React, { useState, useEffect } from 'react';
import estilo from './gatinhos.module.css'; 

// Variáveis da API
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key = "live_75TYakh8q6zHQ5lvpnPn46xkC4EcOA5tdjJflogBtgd3ntd6dIL6BRaXpweSYXl"

// Defina a tipagem para o objeto Gatinho (boa prática)
interface GatinhoData {
  id: string;
  url: string;
}

// ⬅️ TUDO DEVE ESTAR AQUI DENTRO!
export default function Gatinhos() { 

  const [gatinhos, setGatinhos] = useState<GatinhoData[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function buscarGatinhos() {
      // ... try block do fetch
      try {
        const response = await fetch(url, { headers: { 'x-api-key': api_key } });
        if (!response.ok) {
          throw new Error(`Erro de HTTP: ${response.status}`);
        }
        const data: GatinhoData[] = await response.json();
        setGatinhos(data); 

      } catch (error) { // ⬅️ Tipagem Corrigida
        console.error("Erro ao buscar gatinhos:", error);
        if (error instanceof Error) {
          setErro(error.message);
        } else {
          setErro("Ocorreu um erro desconhecido.");
        }
      } finally {
        setCarregando(false);
      }
    }
    buscarGatinhos();
  }, []); 

  // ⬅️ Retornos de Renderização (IFs)
  if (carregando) {
    return <div className={estilo.maincontent}>Carregando gatinhos...</div>;
  }

  if (erro) {
    return <div className={estilo.maincontent}>Erro ao carregar dados: {erro}</div>;
  }

  // ⬅️ Retorno Principal (MAP)
  return (
    <div className={estilo.maincontent}>
      <div className={estilo.imgrid}>
        {gatinhos.map((imageData) => (
          <div 
            key={imageData.id} 
            className={`${estilo.colLg}`}
          >
            <img src={imageData.url} alt="Gatinho fofo" />
          </div>
        ))}
      </div>
    </div>
  );
} // ⬅️ Fim da função