import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: 2px solid var(--color-green);
  border-radius: 26px;
  font-family:'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color:var(--color-green);
  height: 4vh;
  width: 10vw;
  background-color: var(--color-background-black);
  transition: all 1s ease;

:hover{
    background-color: var(--color-green);
    color: var(--color-black)
};
}
  

`