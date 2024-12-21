import React from 'react'
import { Row, Col, Collapse, Typography, Avatar } from 'antd'
import '../style/style.css'

const About = () => {
  const {Title} = Typography;

  return (
      <div className='about-container'>
      <Typography>
        <Title className='about-title'>
        Buckle Up, Buttercup, It's About to Get Cryptic!
        </Title>
      </Typography>
      <div className="imgContainer">
          <img src="./aboutBG.png" alt="" />
      </div>
      <div className='paras'>

        <p className='aboutPara'>Feeling like a hamster on a financial wheel, going nowhere fast? Tired of the same old, tired banks telling you "no" when you ask for a loan (even if it's just to buy that life-sized cardboard cutout of Nicolas Cage)? Well, my friend, have we got the thing for you!</p>

        <p className='aboutPara'>We're talking about cryptocurrency, the future of finance, the Wild West of the digital world, and (dare we say it) the potential key to unlocking your inner financial rockstar.</p>

        <p className='aboutPara'>Here at Cryptube, we're all about making crypto accessible and, dare we say it, fun. We believe everyone deserves a shot at financial freedom, and that shouldn't involve deciphering a textbook on advanced cryptography.</p>
<p className='aboutPara'>So, whether you're a seasoned crypto shark or just a curious minnow dipping your toes in the digital pond, we're here to guide you on your journey. We'll explain things in plain English (no rocket science degrees required), answer your burning questions, and maybe even throw in a few bad crypto puns along the way (because hey, why not?).</p>

<p className='aboutPara'>So, ditch the dusty piggy bank and dive into the world of crypto with us. It's gonna be a wild ride!</p>
      </div>
    </div>
  )
}
export default About;