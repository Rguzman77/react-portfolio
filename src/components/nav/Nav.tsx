import { Link } from 'react-router-dom'
import { NavStyle } from './NavStyle'
import  logo  from '../../assets/logo.svg'


const Nav = () => {
  return (
    <NavStyle>
      <div>
        <Link to="/"><img src={logo} alt='logo'/></Link>
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </NavStyle>
  )
}

export default Nav