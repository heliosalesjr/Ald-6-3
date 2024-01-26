'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecPadlet from '../components/Recursos/RecPadlet'
import RecDiario from '../components/Recursos/RecDiario'
import RecPadletVideo from '../components/Recursos/RecPadletVideo'
import AtiUnindoFerramentas from '../components/Recursos/AtiUnindoFerramentas'
import RecInfo from '../components/Recursos/RecInfo'
import RecFerramentas from '../components/Recursos/RecFerramentas'


function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecPadlet />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        
        <RecPadletVideo />
        <Divider className='max-w-5xl mx-auto my-4'/>
        <AtiUnindoFerramentas />
        <RecInfo />
        <RecFerramentas />
    </>
    
  )
}

export default Recursos