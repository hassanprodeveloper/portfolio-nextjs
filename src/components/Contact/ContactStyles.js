import { css } from "styled-components";
import styled from "styled-components";

export const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Input = styled.input`
  border: 1px solid #6b6b6b;
  padding: 12px;
  margin: 12px 0;
  width: 100%;
  border-radius: 12px;
  background: #212d45;
  color: #fbfbfc;
  outline: none;

  &:focus,
  &:active {
    border: 1px solid #ffffff77;
  }
`;

export const StyledButton = styled.button`
  background: #e6343b;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  border: 1px solid #ffffff33;
  padding: 12px;
  margin: 12px 0;
  width: 100%;
  border-radius: 12px;
  background: #212d45;
  color: #fbfbfc;
  outline:none;

  &:focus,
  &:active {
    border: 1px solid #ffffff77;
  }
`;
