import { ProjectCardStyle } from './ProjectCardStyle'
import background from '../../assets/enlacebackground.png'
import logo from '../../assets/enlacelogo.svg'
import { Link } from 'react-router-dom'



const projects = () => {
  return (
    <div Style='display: flex; flex-direction:row;'>
      <ProjectCardStyle>
      <Link to='https://github.com/Enlace-Urbano'> 
        <article>
          <img src={background} alt="Enlace Urbano Background" />
          <img src={logo} alt="Enlace Urbano Logo" />
        </article>
        <p>Texto aqui</p>
      </Link>
      </ProjectCardStyle>
      <ProjectCardStyle>
      <Link to='https://github.com/Enlace-Urbano'> 
        <article>
          <img src={background} alt="Enlace Urbano Background" />
          <img src={logo} alt="Enlace Urbano Logo" />
        </article>
        <p>Texto aqui</p>
      </Link>
      </ProjectCardStyle>
      <ProjectCardStyle>
      <Link to='https://github.com/Enlace-Urbano'> 
        <article>
          <img src={background} alt="Enlace Urbano Background" />
          <img src={logo} alt="Enlace Urbano Logo" />
        </article>
        <p>Texto aqui</p>
      </Link>
      </ProjectCardStyle>
    </div>
  )
}

export default projects