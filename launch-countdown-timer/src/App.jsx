import styled from "styled-components";
import CountdownTimer from "./CountdownTimer";
import backgroundImage from "./assets/images/bg-stars.svg";
import backgroundFooter from "./assets/images/pattern-hills.svg";

const StyledApp = styled.div`
  min-height: 100vh;
  padding-top: 9.25em;

  background-color: ${({ theme }) => theme.backgroundColor.body};
  background-image: url(${backgroundImage}), url(${backgroundFooter});
  background-position: top center, bottom right;
  background-repeat: no-repeat;
  background-size: cover, max(728px, 100%) 25vh;

  font-size: 0.875rem;
  font-family: "Red Hat Text", sans-serif;
`;

const StyledHeading = styled.h1`
  position: relative; // for ::before
  margin-inline: auto;
  width: max-content;
  max-width: 90%;
  color: ${({ theme }) => theme.color.heading};
  font-size: 1.25rem;
  letter-spacing: 0.25em;
  text-align: center;
  text-transform: uppercase;

  @media (prefers-reduced-motion: no-preference) {
    &::before {
      content: "";
      position: absolute;
      inset: 125% auto auto 0;
      width: 1em;
      height: 2px;
      background-color: currentColor;
      animation: translateX 1s linear alternate infinite;
    }
  }

  @keyframes translateX {
    to {
      left: 100%;
      translate: -100% 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    letter-spacing: 0.4em;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  gap: 2em;

  margin-top: 20em;

  & i {
    transition: color 0.1s linear;
    color: ${({ theme }) => theme.color.secondary};

    &:is(:hover, :focus-visible) {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    margin-top: 18em;
  }
`;

export default function App() {
  return (
    <StyledApp>
      <StyledHeading>We're launching soon</StyledHeading>
      <CountdownTimer />
      <StyledFooter>
        <a href="#0">
          <i className="fa-brands fa-square-facebook fa-2xl"></i>
        </a>
        <a href="#0">
          <i className="fa-brands fa-pinterest fa-2xl"></i>
        </a>
        <a href="#0">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </a>
      </StyledFooter>
    </StyledApp>
  );
}
