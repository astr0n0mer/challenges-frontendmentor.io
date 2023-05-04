import styled from "styled-components";
import AgeCalculator from "./AgeCalculator";

const StyledApp = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-height: 100dvh;

  background-color: ${({ theme }) => theme.backgroundColor.body};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export default function App() {
  return (
    <StyledApp>
      <AgeCalculator />
    </StyledApp>
  );
}
