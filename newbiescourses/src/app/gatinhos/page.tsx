"use client"; 

import React, { useState, useEffect } from 'react';
import estilo from './gatinhos.module.css'; 

// Variáveis da API
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key = "live_75TYakh8q6zHQ5lvpnPn46xkC4EcOA5tdjJflogBtgd3ntd6dILF6BRaXpweSYXl"

export default function Gatinhos() {

  const [gatinhos, setGatinhos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarGatinhos() {
      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': api_key
          }
        });

        if (!response.ok) {
          throw new Error(`Erro de HTTP: ${response.status}`);
        }

        const data = await response.json();
        setGatinhos(data); 

      } catch (error) {
        console.error("Erro ao buscar gatinhos:", error);
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarGatinhos();
  }, []); 

  if (carregando) {
    return <div className={estilo.maincontent}>Carregando gatinhos...</div>;
  }

  if (erro) {
    return <div className={estilo.maincontent}>Erro ao carregar dados: {erro}</div>;
  }

  return (
    <div className={estilo.maincontent}>
      <div className={estilo.imgrid}>
        {gatinhos.map((imageData) => (
          <div 
            key={imageData.id || imageData.url} 
            className={`${estilo.colLg}`}
          >
            <img src={imageData.url} alt="Gatinho fofo" />
          </div>
        ))}
      </div>
    </div>
  );
}