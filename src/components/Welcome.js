import React from "react";
import styled from "styled-components";
// import colorAnimation from "../assets/animation";

const Welcome = () => {

  const buttonPress = () => {
    // Delay the navigation to MainScreen for a brief moment to allow the highlight effect to be visible
    setTimeout(() => {
      window.location.href = "/Main";
    }, 200);
  };

  return (
    <Container>
      <Heading>
        <Text>Expressions</Text>
        <Caption>Capture your face</Caption>
      </Heading>

      <WrapperContent>
        <Image src={require("../assets/smile.jpg")} />

        <Description>
          Expressions is an emotion and face recognition web app that works with
          the help of AI. To achieve this, I have used a public API called
          face-api.js which provides various functionalities such as emotion
          detection and face landmark functionalities. More details of the
          project can be found in Introduction.md file.
        </Description>

        <Button onClick={() => {window.location.href = "/Main"}}>
          Proceed to Expressions
        </Button>
      </WrapperContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background-color:#F0E161;
  border-radius: 1px;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.4);
  z-index: 999;

  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;


const WrapperContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:#FFF38C;
  ${'' /* animation: ${colorAnimation} 2s linear infinite; */}

  @media (max-width: 720px) {
    width: 100%;
    padding: 20px;
  }
`;

const Text = styled.div`
  color:#ffff;
  font-size: 100px;
  font-family:  "Tangerine";
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Caption = styled.div`
  color:#071952;
  margin-top: 10px;
  font-size: 24px;
  font-family: "Dancing Script", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Image = styled.img`
  width: 30vh;
  border-radius: 30vh;
`;

const Description = styled.div`
  width: 80%;
  margin-top: 8vh;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 400;
  color:black;
`;

const Button = styled.button`
  margin-top: 10vh;
  width: 60%;
  height: 10vh;
  background-color:#FFF4CF;
  border-radius: 60px;
  border-width: 0;
  box-shadow: 0 4px rgba(0, 0, 0, 0.4);
  font-size: 25px;
  font-family: "Poppins";
  color: #071952;

  @media (max-width: 720px) {
    width: 100%;
  }

  &:active {
    background-color: #C0B236;
  }
`;

export default Welcome;
