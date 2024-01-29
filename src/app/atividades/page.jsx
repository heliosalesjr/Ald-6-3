'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'
import AtiAvalia from '../components/Atividades/AtiAvalia'
import AtiABP from '../components/Atividades/AtiABP'
import AtivHero from '../components/Atividades/AtivHero'
import AtiEstudante from '../components/Atividades/AtiEstudante'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import { Divider } from '@nextui-org/react'
import Monitoramento from '../components/Atividades/Monitoramento'
import AtiDiarioBordo from '../components/Atividades/AtiDiarioBordo'

function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <AtiAvalia />
        <AtiABP />
        <AtiEstudante />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        <AtiSugestao />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        <Monitoramento />
        <AtiDiarioBordo />
        <Divider className='max-w-5xl mx-auto'/>
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades