import styled from "styled-components";

const CardContainer = styled.div`
  pointer-events: none;
  font-weight: 700;
  font-size: clamp(2rem, 3vw + 1.3rem, 4rem);
  text-align: center;
`;

const Card = styled.div`
  position: relative; // for ::before, ::after
  overflow-x: hidden; // for ::before, ::after
  margin-bottom: 0.25em;
  border-radius: 3px;
  padding: 0.5em 0.25em;

  color: ${({ theme }) => theme.color.primary};
  background-color: hsl(235, 16%, 14%);
  background-image: linear-gradient(
    ${({ theme }) => theme.backgroundColor.cardTop} calc(50% - 1px),
    transparent calc(50% - 1px),
    transparent calc(50% + 1px),
    ${({ theme }) => theme.backgroundColor.cardBottom} calc(50% + 1px)
  );
  box-shadow: 0 0.15em ${({ theme }) => theme.backgroundColor.cardDots};
  text-shadow: 0 1px 8px hsl(0, 0%, 0%, 0.5);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 50% auto auto 0;
    translate: -50% -50%;

    border-radius: 50%;
    width: 10px;
    aspect-ratio: 1;

    background-color: inherit;
  }

  &::after {
    inset-inline: auto 0;
    translate: 50% -50%;
  }

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    margin-bottom: 0.5em;
  }
`;

const CardCaption = styled.figcaption`
  color: ${({ theme }) => theme.color.secondary};
  font-size: clamp(0.5rem, 0.8vw + 0.3rem, 1rem);
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

export default function FlipCard({ unit, curValue, ...props }) {
  return (
    <CardContainer {...props}>
      <Card>{curValue}</Card>
      <CardCaption>{unit}</CardCaption>
    </CardContainer>
  );
}
