'use client'


import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'
import MatVideos from '../components/Matematica/MatVideos'



function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatVideos />
        <Divider className='max-w-5xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica