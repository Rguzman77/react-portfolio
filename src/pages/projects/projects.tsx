
import { ProjectCard } from '../../elements'
import { ProjectCardsContainerStyle } from './ProjectCardsContainerStyle'
import { enlaceBackground, enlaceLogo, jumanjiBackground, jumanjiLogo, recetteBackground, recetteLogo, wheelBackground, wheelLogo } from '../../assets/imagesIndex'



const projects = () => {
  return (
    
    <ProjectCardsContainerStyle>
      <ProjectCard background={enlaceBackground} logo= {enlaceLogo} description='Enlace urbano fue el Ultimo Proyecto realizado en el transcurso del cursado del bootcamp Full stack de 850hs de factoria F5.'  url='https://github.com/Enlace-Urbano'></ProjectCard>
      <ProjectCard background={recetteBackground} logo={recetteLogo} description='La App de recetas reactivas se cocino a fuego lento, como primer proyecto de una SPA trajo sus retos de crear una red social con interaccion a una APIRest basada en NestJS.'  url='https://github.com/Rguzman77/front-recette-social-recetasreactivas'></ProjectCard>
      <ProjectCard background={wheelBackground} logo={wheelLogo} description='Esta Wheel of doom fue creada con la finalidad de comprender logica de programación tomando nombres de coders y girando dados que funcionaban con mathRandom para determinar el destino de cada nombre escrito.'  url='https://github.com/Rguzman77/elRepo'></ProjectCard>
      <ProjectCard background={jumanjiBackground} logo={jumanjiLogo} description='En "Jumanji" tome mis primeros pasos trabajando de manera colaborativa de forma agile para realizar un mockup en HTML CSS y JS.'  url='https://github.com/Rguzman77/jumanji'></ProjectCard>
    </ProjectCardsContainerStyle>
    
  )
}

export default projects