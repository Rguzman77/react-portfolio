import styled from "styled-components";

export const Circle1 = styled.div`
    background: var(--color-black);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position:absolute;
    left:2em;
    bottom:1em;
    z-index: -1;
    img{
        position:absolute;
        margin:0 auto;
        width: 100%;
        height: 100%;
    }
@media screen and (min-width: 768px) {
    width: 600px;
    height: 600px;
    left:-4em;
    bottom:-5em;
    
}

`
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
    width: 500px;
    height: 500px;
    left:35em;
    top:-5em;
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
    width: 800px;
    height: 800px;
    left:60em;
    bottom:-30em;
}
`