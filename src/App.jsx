import Card from "./components/Card/Card";
import styled from "styled-components";

const cards = [
  { duration: 2800, color: "#8c00ff" },
  { duration: 4000, color: "#ff00ea" },
  { duration: 2000, color: "#00ff4c" },
];

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
