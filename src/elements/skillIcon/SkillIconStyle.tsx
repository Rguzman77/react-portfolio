import styled from "styled-components";

export const SkilIconStyle = styled.section`
  display: grid;
  grid-template-rows: repeat(1.5fr 0.5fr);
  justify-items: center;
  font-size: 1.2rem;
  padding-bottom: 2rem;
  svg {
    width: 3rem;
    height: 3rem;
  };
  
  svg:hover {
    transform: skew(-9deg) scale(1.1);
    color:var(--color--green);
    transition: all 0.3s ease;
  };

  p{
    color:var(--color--text);
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
  };
  
`
