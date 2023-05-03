import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: 2px solid var(--color-green);
  border-radius: 26px;
  font-family:'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color:var(--color-green);
  
  width: fit-content;
  background-color: transparent;
  transition: all 1s ease;
  padding:5px 20px 5px 20px;
  
:hover {
    background-color: var(--color-green);
    color: var(--color-black)
};
`