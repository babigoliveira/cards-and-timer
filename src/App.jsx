import Card from "./components/Card/Card";
import styled from "styled-components";

import cards from "../data.json";

const Container = styled.div`
  padding: 20px 20px; ;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const App = () => {
  return (
    <Container>
      <Title>Cards and timer</Title>
      <Cards>
        {cards.map((card, i) => (
          <Card key={i} duration={card.duration} color={card.color} />
        ))}
      </Cards>
    </Container>
  );
};

export default App;
