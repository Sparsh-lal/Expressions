import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { styled } from "styled-components";
import LoadingScreen from "./LoadingScreen";

const Webcam = ({ setResult, setIsDetecting, setEmotion, isDetecting }) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [resultExpression, setResultExpression] = useState(
    "Click on the button please!"
  );

  const [intervalId, setIntervalId] = useState(null);
  const [loading, setLoading] = useState(false);

  const useTiny = true;

  useEffect(() => {
    getVideo();
  }, []);

  const dimensions = {
    width: 640,
    height: 480,
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: dimensions })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleDetectClick = () => {
    var myVideo = document.getElementById("camera");
    if (isDetecting) {
      clearInterval(intervalId);
      setIsDetecting(false);
      setResultExpression("Click on the button please!");
      setEmotion("");
      myVideo.pause();
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, dimensions.width, dimensions.height);
    } else {
        setLoading(true);
      setResultExpression("The model is processing. Please wait....");
      myVideo.play();
      const id = setInterval(detect, 1000);
      setIntervalId(id);
      setIsDetecting(true);
    }
  };

  const detect = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(useTiny)
      .withFaceExpressions()
      .withFaceDescriptors();

    if (detections.length > 0) {
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, dimensions.width, dimensions.height);

      detections.forEach((detection) => {
        const resizedDetections = faceapi.resizeResults(detection, dimensions);
        setResult(true);
        console.log("Result", resizedDetections);
        showDetections(resizedDetections);
        setLoading(false);
        setResultExpression(
          `You are now ${
            resizedDetections.expressions.asSortedArray()[0].expression
          }`
        );
        setEmotion(resizedDetections.expressions.asSortedArray()[0].expression);
      });
    } else {
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, dimensions.width, dimensions.height);
      setResultExpression("Please show your face clearly");
      setEmotion("");
    }
  };

  const showDetections = (detection) => {
    faceapi.matchDimensions(canvasRef.current, dimensions);
    const resizedDetections = faceapi.resizeResults(detection, dimensions);
    const minProbability = 0.05;

    const drawBox = new faceapi.draw.DrawBox(
      resizedDetections.detection.box,
      "lineWidth: 3"
    );
    drawBox.draw(canvasRef.current);

    faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
    faceapi.draw.drawFaceExpressions(
      canvasRef.current,
      resizedDetections,
      minProbability
    );
  };

  return (
    <>
      <LogoWrapper>
        <Text>Expressions</Text>
        <Caption>Capture your face</Caption>
      </LogoWrapper>

      <ContainerLeft>
        <Detection>
          <Cam id="camera" autoPlay muted ref={videoRef} />
          <Canvas ref={canvasRef} />
        </Detection>

        <Button onClick={handleDetectClick}>
          {isDetecting ? "Stop" : "Start"} Detection
        </Button>

        <Resultant>{resultExpression}</Resultant>
      </ContainerLeft>
    </>
  );
};

export default Webcam;

const LogoWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background-color: #fbd85d;
  border-radius: 1px;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.4);
  z-index: 999;

  @media (max-width: 720px) {
    display: flex;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    display: flex;
    font-size: 40px;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 60px;
  font-family: "Tangerine";
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Caption = styled.div`
  color: #071952;
  margin-top: 10px;
  font-size: 24px;
  font-family: "Dancing Script", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const ContainerLeft = styled.div`
  margin-top: 6vh;
  flex-direction: column;
  width: 640px;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    width: 350px;
  }
`;

const Detection = styled.div`
  display: flex;
  color: white;
`;

const Cam = styled.video`
  border-radius: 10px;
  border-color: black;
  border-width: 1;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 720px) {
    width: 350px;
    height: 262px;
    border-radius: 30px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;

  @media (max-width: 720px) {
    width: 350px;
    height: 262px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 6vh;
  margin-top: 3vh;
  border-radius: 30px;
  border-width:0;
  font-family: "Poppins";
  font-size: 20px;
  background-color: #ff0060;
  color: #f6fa70;
  box-shadow: 2px 4px  rgba(0, 0, 0, 0.4);


  &:active {
    background-color: #b70404;
    color: #f2be22;
  }

  @media (max-width: 720px) {
    width: 40%;
    font-size: 15px;
  }
`;

const Resultant = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  margin-top: 3vh;
  font-size: 30px;
  background-color: #e9ffc2;
  height: 10vh;
  border-radius: 50px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 720px) {
    font-size: 18px;
    height: 5vh;
  }
`;
