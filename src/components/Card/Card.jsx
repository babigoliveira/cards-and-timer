import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const bubble = keyframes`
  0% {
    transform: scale(.8);
    filter: brightness(85%);
  }
  50% {
    transform: scale(1);
    filter: brightness(100%);
  }
  100% {
    transform: scale(.8);
    filter: brightness(85%);
  }
`;

const Container = styled.div`
  height: 60px;
  border: 3px solid ${(props) => props.color};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    !props.animating &&
    css`
      background-color: ${(props) => props.color};
    `}
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  ${(props) =>
    props.animating &&
    css`
      animation: ${bubble} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
    `}
`;

const Card = ({ duration, color }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const stopAnimation = () => {
      setAnimating(false);
    };

    setTimeout(stopAnimation, duration);
  }, []);

  return (
    <Container color={color} animating={animating}>
      <Circle color={color} duration={duration} animating={animating} />
    </Container>
  );
};

export default Card;
