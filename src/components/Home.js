import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: lightblue;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: darkblue;
`;

const CategoryTitle = styled.h2`
  color: green;
`;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   gap: 20px;
//   margin-top: 10px;
// `;

function Home() {
  return (
    <div className="Home">
      <Container>
        {/* <Nav>
          <Link to="/products/Electronics">Electronics</Link>
          <Link to="/products/Clothing">Clothing</Link>
          <Link to="/products/Accessories">Accessories</Link>
        </Nav> */}
        <br />
        <br />
        <Title>Welcome to the React Project</Title>
        <CategoryTitle>HARI KUMAR</CategoryTitle>
      </Container>
      <img
        src="https://images4.alphacoders.com/101/thumb-1920-1012509.jpg"
        alt="Dragon"
        style={{
          width: "100%",
          height: "400px",
          padding: "10px",
        }}
      />
    </div>
  );
}

export default Home;
