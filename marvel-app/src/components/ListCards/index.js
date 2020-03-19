import React from "react";
import { Link } from "react-router-dom"

import Card from "../Card";
import { Container } from "./styles";

import characters from "../../data";

export default function ListCard() {
  const { results } = characters.data;

  return (
    <Container>
      {results.map(character => (
        <Link key={character.id} to={`/details/${character.id}`}>
        <Card
        
          imgCharacter={`${character.thumbnail.path}.${
            character.thumbnail.extension
          }`}
          nameCharacter={character.name}
          description={
            character.description
              ? character.description
              : "Não foi definida uma descrição!"
          }
        />
        </Link>
      ))}
    </Container>
  );
}
