import { Button } from '../../elements/index'
import { TitleStyle } from './TitleStyle'
import { HomeCard } from './HomeCard'
import { HomeStyle } from './HomeStyle'
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
      <div className='circle1'><img src={profileimage}/></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle3'></div>
    </HomeStyle>

  )
}

export default Home