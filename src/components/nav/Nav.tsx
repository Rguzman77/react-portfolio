import { Link } from 'react-router-dom'
import { NavStyle } from './NavStyle'
import  logo  from '../../assets/siteLogo.svg'


const Nav = () => {
  return (
    <NavStyle>
      <div>
        <Link to="/"><img src={logo} alt='logo'/></Link>
      </div>
      <div>
        <Link to="/about">&lt;About&gt;</Link>
        <Link to="/skills">&lt;Skills&gt;</Link>
        <Link to="/projects">&lt;Projects&gt;</Link>
        <Link to="/contact">&lt;Contact&gt;</Link>
      </div>
    </NavStyle>
  )
}


export default Nav