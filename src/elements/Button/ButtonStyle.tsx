import styled from 'styled-components';

interface ButtonStyleProps {
  color: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  border: 2px solid ${({ color }) => color};
  border-radius: 26px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ color }) => color};
  width: fit-content;
  background-color: transparent;
  transition: all 1s ease;
  padding: 5px 20px;

  :hover {
    background-color: ${({ color }) => color};
    color: var(--color-black);
  }
`;