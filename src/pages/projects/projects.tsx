import { ProjectCardStyle } from './ProjectCardStyle'
import background from '../../assets/enlacebackground.png'
import logo from '../../assets/enlacelogo.svg'


const projects = () => {
  return (
    <>
    <ProjectCardStyle>
      <article>
        <img src={background} alt="Enlace Urbano Background" />
        <img src={logo} alt="Enlace Urbano Logo" />
      </article>
    </ProjectCardStyle>
    </>
  )
}

export default projects