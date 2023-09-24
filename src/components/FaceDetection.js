import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { styled } from "styled-components";
import emotionClassifier from "./emotions";
import LoadingScreen from "./LoadingScreen";
import Webcam from "./Webcam";
import ResultBox from "./ResultBox";

const FaceDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [emotion, setEmotion] = useState("");

  useEffect(() =>{
    const loadModels = async () => {
      const url = process.env.PUBLIC_URL + "/models";
      await faceapi.loadTinyFaceDetectorModel(url);
      await faceapi.loadFaceLandmarkTinyModel(url);
      await faceapi.loadFaceExpressionModel(url);
      await faceapi.loadFaceRecognitionModel(url);
      console.log("Models loaded");
      setIsLoading(false);
    };
    loadModels();
  },[])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Screen>
        <Webcam
        setResult={setResult}
        setIsDetecting={setIsDetecting}
        setEmotion={setEmotion}
        isDetecting={isDetecting}
      />

            {result && (
                <ResultBox emotion={emotion}/>
            )}

          <BgVideo
            autoPlay
            loop
            muted
            playsInline
            src={emotionClassifier.getBgVideo(emotion)}
            className="bg-video"
          />
        </Screen>
      )}
    </>
  );
};

export default FaceDetection;

const Screen = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
  const BgVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `;
