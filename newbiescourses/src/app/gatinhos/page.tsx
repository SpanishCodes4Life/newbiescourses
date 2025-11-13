// ... (código anterior)

  useEffect(() => {
    async function buscarGatinhos() {
      try {
        // ... (código de fetch)
        
        if (!response.ok) {
          throw new Error(`Erro de HTTP: ${response.status}`);
        }

        const data = await response.json();
        setGatinhos(data); 

      }
       catch (error) {
        console.error("Erro ao buscar gatinhos:", error);
        
        // **AQUI ESTÁ A CORREÇÃO DE TIPAGEM:**
        if (error instanceof Error) {
          // Se for uma instância de Error, podemos acessar .message
          setErro(error.message);
        } else {
          // Caso contrário, usamos uma mensagem genérica ou convertemos para string
          setErro("Ocorreu um erro desconhecido.");
        }

      } finally {
        setCarregando(false);
      }
    }

    buscarGatinhos();
  }, []); 

// ... (restante do código)