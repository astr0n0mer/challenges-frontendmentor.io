import styled from "styled-components";

const StyledInputWithLabel = styled.div`
  & > * {
    display: block;
  }
`;

const InputLabel = styled.label`
  color: ${({ errorMessage, theme }) =>
    errorMessage ? theme.color.error : theme.color.placeholder};
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  &::after {
    ${({ required }) => `content: "${required && "*"}"`};
    margin-left: 0.2em;
    vertical-align: text-top;
    color: ${({ theme }) => theme.color.error};
  }
`;

const Input = styled.input`
  margin-block: 0.3em;
  border: 2px solid ${({ theme }) => theme.color.input};
  border-radius: 0.25em;
  outline-color: transparent;
  padding: 0.5em 0.75em;
  width: 100%;
  font-weight: 700;
  font-size: clamp(1.25rem, 1.1vw + 1rem, 2rem);

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }

  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }

  &:is(:hover, :focus-visible) {
    border-color: ${({ theme }) => theme.color.highlight};
    outline-color: ${({ theme }) => theme.color.highlight};
  }
`;

const ErrorLabel = styled.label`
  translate: 0 -100%;
  opacity: 0;
  transition: all 0.3s linear;
  transition-property: translate, opacity;
  ${({ errorMessage }) => errorMessage && `translate: 0; opacity: 1;`};

  min-height: 1.1em;
  color: ${({ theme }) => theme.color.error};
  font-size: 0.9rem;
  font-style: italic;
`;

export default function InputWithLabel({
  datepart,
  date,
  setDate,
  error,
  min,
  max,
  placeholder,
  required,
  ...props
}) {
  function setDatepart(e) {
    setDate(() => ({ ...date, [datepart]: e.target.value }));
  }

  return (
    <StyledInputWithLabel {...props}>
      <InputLabel htmlFor={datepart} required={required} errorMessage={error}>
        {datepart}
      </InputLabel>
      <Input
        type="number"
        name={datepart}
        id={datepart}
        value={date[datepart]}
        min={min}
        max={max}
        placeholder={placeholder}
        inputMode="numeric"
        required={required}
        onChange={setDatepart}
      />
      <ErrorLabel errorMessage={error}>{error}</ErrorLabel>
    </StyledInputWithLabel>
  );
}
