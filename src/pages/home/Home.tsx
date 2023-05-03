import { Button } from '../../elements/index'
import { TitleStyle } from './TitleStyle'
import { HomeCard } from './HomeCard'
import { HomeStyle } from './HomeStyle'
import { Circle1, Circle2, Circle3 } from './Circles'
import profileimage from '../../assets/profileimage.svg'





const Home = () => {
  
  return (   
    <HomeStyle>
      <HomeCard>
          <TitleStyle>
            <h1>Hola soy Emmanuel,<br/>Full Stack dev.</h1>
            <h2>Buscando oportunidades para<br/> desarrollar mis habilidades<br/> conocimientos en tecnología web</h2>
          </TitleStyle>
          <Button label="Contáctame"/>
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
    </HomeStyle>

  )
}

export default Home