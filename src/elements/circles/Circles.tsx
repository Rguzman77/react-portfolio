import styled from "styled-components";

export const Circle1 = styled.div`
  background: var(--color-black);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  left: 80vw;
  bottom: 1em;
  z-index: 1;
 
  
  img {
    display: none;
  }
  @media screen and (min-width: 768px) {
      width: 300px;
      height: 300px;
      left: 60vw;
      bottom: 19vh;
      transition: all 0.4s ease;
    
    img {
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      display: block;
    }
    

}
`;


export const Circle2 = styled.div`
    background: var(--color-black);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position:absolute;
    left:7em;
    top:8em;
    z-index: -1;
    @media screen and (min-width: 768px) {
    width: 170px;
    height: 170px;
    left:5em;
    top:1em;
   
}
`


export const Circle3 = styled.div`
    background: var(--color-black);
    border-radius: 50%;
    width: 400px;
    height: 400px;
    position:absolute;
    left:16em;
    bottom: -12em;
    z-index: -1;
    @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    left:0em;
    bottom:0em;
}
`