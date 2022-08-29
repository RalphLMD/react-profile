import React from 'react'
import NameType, { HomeContainer, HomeContent, HomeH1, HomeP } from './HomeElements'
import Typewriter from 'typewriter-effect'

const HomeSection = () => {
  return (
  <HomeContainer>
    <HomeContent>
      <HomeH1>
        Hi, My name is <span style={{backgroundColor:'#FFFFFF', color:'#000000', fontWeight:'bold', padding:'0 10px 0 10px'}}>Ralph Lance M. Dahilig</span>
      </HomeH1>
      <HomeP>I am a<NameType/></HomeP>
    </HomeContent>
  </HomeContainer>
  )
}

export default HomeSection