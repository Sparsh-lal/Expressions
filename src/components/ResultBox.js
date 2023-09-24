import React from 'react'
import { styled } from "styled-components";
import emotionClassifier from "./emotions";

const ResultBox = ({emotion}) => {
  return (
    <ContainerRight>

    <h1>Mood Description</h1>

    <SmileyWrapper>
      <Smiley src={emotionClassifier.getSmiley(emotion)} />
      {emotion.toUpperCase()}
    </SmileyWrapper>

    <p style={{ color: "#2F0F5D" }}>
      {emotionClassifier.getDescription(emotion)}
    </p>

       {emotion && 
       <>
        <SpotifyText>
          Here are some songs suited for your mood
        </SpotifyText>

        <Spotify>

          <SpotifyLogo src={require("../assets/spotify.png")} />
          <a href={`${emotionClassifier.getSongs(emotion)}`}>
            Open Spotify
          </a>
        </Spotify>

       </>
        
       }
  </ContainerRight>
  )
}

export default ResultBox


const ContainerRight = styled.div`
  margin-top: 6vh;
  background-color: #e9ffc2;
  width: 40vw;
  margin-left:50px;
  border-radius: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
    flex-wrap:wrap;
    box-shadow: 8px 8px 8px 8px  rgba(0, 0, 0, 0.4);
    margin-bottom:20px;

  & > h1 {
    color: #2f0f5d;
    margin-top: 2vh;
    font-family: "Poppins";
    ${'' /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); */}
  }

  & > p {
    margin: 20px 30px;
    font-size: 17px;
    ${'' /* font-weight: 200; */}
    font-family: "Poppins";
    color: #2f0f5d;
    

    @media (max-width: 720px) {
      font-size: 15px;
    }
  }

  & > a {
    text-decoration: none;
    font-size: 20px;
    color: green;
  }
  @media (max-width: 980px) {
    width: 80%;
    margin-left:0;
    box-shadow: 4px 4px 4px 4px  rgba(0, 0, 0, 0.4);
  }
`;

const SmileyWrapper = styled.div`
  margin-top: 5vh;
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
  font-size: 25px;
  color:#2f0f5d;
  font-weight: 600;

  @media(max-width:720px){
      width:60%;
      font-size:15px;
  }
`;

const Smiley = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 120px;

  @media(max-width:720px){
    width:80px;
    height:80px;
    border-radius:80px;
  }
`;

const SpotifyText = styled.div`
  font-weight: 400;
  font-size: 25px;
  font-family: "Poppins";
  color:#2f0f5d;
  margin-bottom:20px;
  display:flex;
  align-items:center;
  justify-content:center;

  @media(max-width:720px){
    font-size:15px;
  }

`;

const Spotify = styled.button`
  display: flex;
  width: 30%;
  background-color: #16ff00;
  justify-content: space-evenly;
  height: 40px;
  align-items: center;
  border-radius: 30px;
  margin-bottom:20px;
  & > a {
    text-decoration: none;
    font-size: 20px;
    color: black;
    font-family: "Poppins";

    @media (max-width: 720px) {
      font-size: 15px;
      
    }
  }

  &:active {
    background-color: #239d60;
  }

  @media (max-width: 720px) {
    width:40%;
  }
`;

const SpotifyLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;

  @media (max-width: 720px) {
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
`;
