/* eslint-disable @typescript-eslint/no-var-requires */
import { Button } from '../../elements/index'
import { TitleStyle } from './TitleStyle'
import { HomeCard } from './HomeCard'
import cv from '../../assets/cv/cv.pdf'
import { Circle1, Circle2, Circle3 } from './Circles'
import profileimage from '../../assets/profileimage.svg'


function handleRedirect(){
  window.location.href = '/contact';
}

function handleDownload() {
 window.open(cv);
}

const Home = () => {
  
  return (   
    <>
      <HomeCard>
          <TitleStyle>
            <h1>Hola soy Emmanuel,<br/>Full Stack dev.</h1>
            <h2>Buscando oportunidades para<br/> desarrollar mis habilidades <br/> y conocimientos en tecnología web</h2>
          <span>
          <Button label='Descargar CV'color='var(--color-blue)' onClick={handleDownload}/>
          <Button label="Contáctame" color='var(--color-green)' onClick={handleRedirect}/>
          </span>
          </TitleStyle>
      </HomeCard>
         <Circle1>
            <div><img src={profileimage} alt="Profile Image" /></div>
        </Circle1>
        <Circle2>
            <div></div>
        </Circle2> 
        <Circle3>
            <div></div>
        </Circle3>
    </>

  )
}

export default Home