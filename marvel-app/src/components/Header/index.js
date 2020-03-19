import React from "react";
import { Link } from 'react-router-dom';

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>MarvelApp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>
    </Container>
  );
}
