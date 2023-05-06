import styled from "styled-components";
import FlipCard from "./FlipCard.jsx";
import { useState, useRef, useEffect } from "react";

const StyledCountdownTimer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5em;

  margin: 4em auto 0;
  width: min(690px, 85%);

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    gap: 2em;
    margin-top: 7em;
  }
`;

export default function CountdownTimer() {
  const today = useRef(new Date());
  const endDate = useRef(
    new Date(
      today.current.getFullYear(),
      today.current.getMonth(),
      today.current.getDate() + 14
    )
  );

  const totalDurationInSeconds = useRef(
    Math.floor((endDate.current - today.current) / 1000)
  );

  const timerRef = useRef();
  const [duration, setDuration] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }));

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (totalDurationInSeconds.current <= 0) {
        clearInterval(timerRef.current);
      }

      totalDurationInSeconds.current--;
      const days = Math.floor(totalDurationInSeconds.current / (60 * 60 * 24));
      const hours = Math.floor(
        (totalDurationInSeconds.current / (60 * 60)) % 24
      );
      const minutes = Math.floor((totalDurationInSeconds.current / 60) % 60);
      const seconds = totalDurationInSeconds.current % 60;

      setDuration(() => ({ days, hours, minutes, seconds }));
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <StyledCountdownTimer>
      <FlipCard
        unit="days"
        curValue={String(duration.days).padStart(2, "0")}
      ></FlipCard>
      <FlipCard
        unit="hours"
        curValue={String(duration.hours).padStart(2, "0")}
      ></FlipCard>
      <FlipCard
        unit="minutes"
        curValue={String(duration.minutes).padStart(2, "0")}
      ></FlipCard>
      <FlipCard
        unit="seconds"
        curValue={String(duration.seconds).padStart(2, "0")}
      ></FlipCard>
    </StyledCountdownTimer>
  );
}
