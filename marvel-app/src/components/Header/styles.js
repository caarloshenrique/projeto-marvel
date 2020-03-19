import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  width: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  nav ul {
    display: flex;
  }

  nav ul li {
    margin-left: 30px;
  }
`;
