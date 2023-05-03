import styled from 'styled-components';

export const NavStyle = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 12vh;
background-color: var(--color-black);
padding: 7vh;

div:nth-child(2){
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    a {
        box-shadow: inset var(--color-black);
        color:var(--color-text);
        width: 8vh;
        text-align: center;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        font-weight: 600;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
        border-radius: 18px;
    };

    a:hover {
        box-shadow: inset 100px 0 0 0 var(--color-text);
        color:var(--color-black);
    };
};

img{
    border-radius: 20%;
    height: 12vh;
    mix-blend-mode:difference; 
};


`