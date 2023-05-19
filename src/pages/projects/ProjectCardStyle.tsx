import styled from "styled-components";

export const ProjectCardStyle=styled.article`
   position: relative;
    width: 30vw;
    margin: 0 auto;
    margin-top:20vh;
    


article img:first-child{
    box-shadow:  0 60px 60px -60px rgba(0,30,255,0.5);
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    
}
article img:last-child{
    position: absolute;
    width: 200px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(25%);
    transition: .3s ease-in-out;
    opacity: 0;
}

article:hover{
    transform:
    perspective(250px)
    rotateX(10deg)
    translateY(-5%)
    translateZ(0);
    cursor: pointer;
    transition: .3s ease-in-out;
}

article::before{
    content: '';
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        transparent 10%,rgba(0,0,0,0.5)50%,rgba(0,0,0)95%);
        opacity: 0;
        transition: all .3s ease-in-out;
    }

article:hover::before{
    opacity: 1;
}

article:hover img:last-child{
    opacity: 1;
    transform: translateY(10%);
    transition:all ease-in-out;
}
`