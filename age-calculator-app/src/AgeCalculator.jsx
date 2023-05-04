import { useState } from "react";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";
import DownArrow from "./assets/images/icon-arrow.svg";

const StyledContainer = styled.div`
  border-radius: 20px 20px clamp(100px, 30%, 200px);
  width: min(768px, 90%);
  padding: min(5%, 1.75em);
  background-color: ${({ theme }) => theme.backgroundColor.calculator};
`;

const DateOfBirthForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75em;
  border-bottom: 1px solid ${({ theme }) => theme.color.input};
  padding-bottom: min(12.5%, 3rem);

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledSubmit = styled.button`
  position: absolute;
  inset: 100% 50% auto auto;
  translate: 50% -50%;

  display: grid;
  place-items: center;
  transition: inset 0.4s ease, translate 0.4s ease, rotate 0.4s ease,
    box-shadow 0.2s ease;

  border-width: 0;
  border-radius: 50%;
  width: clamp(2em, 15%, 3em);
  aspect-ratio: 1;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.highlight};

  & > img {
    transition: scale 0.2s ease;
    max-width: 100%;
  }

  &:is(:hover, :focus-visible) {
    outline-color: ${({ theme }) => theme.color.highlight};
    box-shadow: 3px 3px 10px ${({ theme }) => theme.color.highlight},
      -3px -3px 10px ${({ theme }) => theme.color.highlight};

    & > img {
      scale: 1.1;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.tabletStart}px) {
    inset: 100% 0 auto auto;
    translate: 0 -50%;
    rotate: 360deg;
  }
`;

const AgeContainer = styled.div`
  margin-top: 2.5em;
`;

const AgeLabel = styled.label`
  display: block;
  font-weight: 800;
  font-size: clamp(3.5rem, 5.3vw + 2.3rem, 7rem);
  font-style: italic;
  line-height: 1;
  letter-spacing: -4px;
`;

const SpanWithHighlight = styled.span`
  color: ${({ theme }) => theme.color.highlight};
  letter-spacing: 3px;
`;

export default function AgeCalculator() {
  const today = new Date(new Date().toDateString());
  const [date, setDate] = useState(() => ({ day: "", month: "", year: "" }));
  const [age, setAge] = useState(() => resetAge());
  const [error, setError] = useState(() => ({ day: "", month: "", year: "" }));

  function resetAge() {
    return {
      years: "--",
      months: "--",
      days: "--",
    };
  }

  function calculateAge(e) {
    e.preventDefault();

    const [errorDay, errorMonth, errorYear] = [
      parseInt(date.day) < 1 || parseInt(date.day) > 31
        ? "Must be a valid day"
        : e.target.day.required && e.target.day.value === ""
        ? "This field is required"
        : "",
      parseInt(date.month) < 1 || parseInt(date.month) > 12
        ? "Must be a valid month"
        : e.target.month.required && e.target.month.value === ""
        ? "This field is required"
        : "",
      date.year > today.getFullYear()
        ? "Must be in the past"
        : e.target.year.required && e.target.year.value === ""
        ? "This field is required"
        : "",
    ];

    setError(() => ({ day: errorDay, month: errorMonth, year: errorYear }));
    // Guard clause to check if day, month or year have any error
    if (errorDay !== "" || errorMonth !== "" || errorYear !== "") {
      setAge(resetAge());
      return;
    }

    // Calculation from https://www.tutorialstonight.com/age-calculator-in-javascript#:~:text=Logic%20For%20Age%20Calculator
    const dob = new Date(`${date.year}/${date.month}/${date.day}`);
    const years =
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() == dob.getMonth() && today.getDate() >= dob.getDate())
        ? today.getFullYear() - dob.getFullYear()
        : today.getFullYear() - dob.getFullYear() - 1;

    let months =
      today.getDate() >= dob.getDate()
        ? today.getMonth() - dob.getMonth()
        : today.getMonth() - dob.getMonth() - 1;
    months = months < 0 ? months + 12 : months;

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days =
      today.getDate() >= dob.getDate()
        ? today.getDate() - dob.getDate()
        : today.getDate() - dob.getDate() + monthDays[dob.getMonth()];

    setAge(() => ({ years: years, months: months, days: days }));
  }

  return (
    <StyledContainer>
      <DateOfBirthForm noValidate onSubmit={calculateAge}>
        <InputWithLabel
          datepart="day"
          date={date}
          setDate={setDate}
          error={error.day}
          min="1"
          max="31"
          placeholder="DD"
          required
        />
        <InputWithLabel
          datepart="month"
          date={date}
          setDate={setDate}
          error={error.month}
          min="1"
          max="12"
          placeholder="MM"
          required
        />
        <InputWithLabel
          datepart="year"
          date={date}
          setDate={setDate}
          error={error.year}
          min={today.getFullYear() - 150}
          max={today.getFullYear()}
          placeholder="YYYY"
          required
        />
        <StyledSubmit type="submit">
          <img src={DownArrow} alt="Submit" />
        </StyledSubmit>
      </DateOfBirthForm>

      <AgeContainer>
        <AgeLabel>
          <SpanWithHighlight>{age.years}</SpanWithHighlight> years
        </AgeLabel>
        <AgeLabel>
          <SpanWithHighlight>{age.months}</SpanWithHighlight> months
        </AgeLabel>
        <AgeLabel>
          <SpanWithHighlight>{age.days}</SpanWithHighlight> days
        </AgeLabel>
      </AgeContainer>
    </StyledContainer>
  );
}
