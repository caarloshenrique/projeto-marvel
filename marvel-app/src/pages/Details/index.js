import React, {useState, useEffect} from "react";

import data from '../../data';
import { Container } from "./styles";

export default function({match}) {
  const [ character, setCharacter ] = useState("Iron Man");

  useEffect(() => {
    setCharacter(data);
    
  })

  function trocarNome() {
    setCharacter("Hulkbuster");
  }

  return (
    <Container>
      <header>
        <h2 onClick={trocarNome}>{character}</h2>
      </header>
      <div>
        <img src="/caminho" alt="Nome do personagem" />
        <p>Biografia completa</p>
      </div>
    </Container>
  );
}
