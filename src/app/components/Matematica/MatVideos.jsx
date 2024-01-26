import React from 'react'
import ReactPlayer from 'react-player'

function MatVideos() {
    return (
        <div className='max-w-7xl mx-auto m-4'>
          <div className='mx-auto p-4'>
            <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Operações com números racionais na representação decimal e Orçamento</h1>
            <p className='text-slate-700 py-4'>Para fazer orçamentos, precisamos saber operar com números racionais na sua forma decimal. Abaixo, a professora Gis traz detalhadamente como fazer as quatro operações com números decimais.</p>
          </div>
          
          <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/cgHJZsVNqOI' width="100%" />
              </div>
              <p className='text-center text-slate-700 p-4'>Adição com números decimais</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/YbVduLUlXX4' width="100%" />
              </div>
              <p className='text-center text-slate-700 p-4'>Subtração com números decimais</p>
            </div>

          </div>

          <div className="max-w-screen-xl mx-auto pb-4 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/Z_Ccpv7hLc0' width="100%" />
              </div>
              <p className='text-center text-slate-700 p-4'>Multiplicação com números decimais</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/_Ur59IV_2Ik' width="100%" />
              </div>
              <p className='text-center text-slate-700 p-4'>Divisão com números decimais</p>
            </div>
            
          </div>
        </div>
      )
    }

export default MatVideos