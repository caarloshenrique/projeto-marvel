import React from "react";

import { Container } from "./styles";

export default function Card(props) {
  return (
    <Container>
      <div>
        <img src={props.imgCharacter} alt={props.nameCharacter} />
      </div>
      <div>
        <h2>{props.nameCharacter}</h2>
        <p>{props.description}</p>
      </div>
    </Container>
  );
}
