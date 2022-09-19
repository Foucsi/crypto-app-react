import React from "react";
import styled from "styled-components";
import { SiBitcoinsv } from "react-icons/si";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .mainContent {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90%;
    width: 90%;
    flex-direction: column;
  }

  .mainContent h1 {
    color: #fff;
    font-size: 2rem;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #343f76;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

function Home() {
  return (
    <Container>
      <div className="mainContent">
        <h1>CRYPTO</h1>
        <SiBitcoinsv size={60} color="#3EA7FE" />
        <NavLink className="link" to="/welcome">
          <Button />
        </NavLink>
      </div>
    </Container>
  );
}

export default Home;
