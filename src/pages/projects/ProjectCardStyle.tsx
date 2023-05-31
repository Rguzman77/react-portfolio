import styled from "styled-components";

export const ProjectCardStyle=styled.article`
   position: relative;
    width: 30vw;
    height: 30vh;
    margin: 0 auto;
    margin-top:20vh;
    


article img:first-child{
    box-shadow:  0 60px 60px -60px rgba(0,30,255,0.5);
    border-radius: 4px;
    object-fit: fill;
    width: 100%;

    
}
article img:last-child{
    position: absolute;
    width: 200px;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(25%);
    
    opacity: 0;
}

article:hover{
    transform:
    perspective(250px)
    rotateX(10deg)
    translateY(-5%)
    translateZ(0);
    cursor: pointer;
    transition: .3s ease-in;
}

article::before{
    content: '';
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        transparent 10%,rgba(0,0,0,0.5)50%,rgba(0,0,0)95%);
        opacity: 0;
        transition: all .3s ease-in;
    }

article:hover::before{
    opacity: 1;
}

article:hover img:last-child{
    opacity: 1;
    transform: translateY(10%);
    transition:all 0.3s ease;
}
p{
    margin-top:30px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
}
`