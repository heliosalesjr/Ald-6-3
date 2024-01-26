import React from 'react'

function RecDiario() {
    return (
        <div className='max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center'>
          
          <div className=''>
            <h1 className='font-bold text-3xl py-4 text-slate-700'>Diário de Bordo</h1>
            <p className='text-slate-700 py-4'>
            Devido à sua estrutura de quadros, o Padlet é muito utilizado como organizador de tarefas, assim como Diário de Bordo para projetos.
            </p>
            <p className='text-slate-700 py-4'>
            Veja abaixo alguns exemplos do uso do Padlet como Diário de Bordo:
            </p>
            <ul className='py-2'>
                <li>
                    <a
                    href='https://padlet.com/cinemaeciencia/sbnsg7spp877tjgk'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-700 underline py-2 hover:text-purple-800'
                    >
                    Exemplo 1
                    </a>
                </li>
                <li>
                    <a
                    href='https://padlet.com/alicepimenta/07'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-700 underline py-2 hover:text-purple-800'
                    >
                    Exemplo 1
                    </a>
                </li>

                <li>
                    <a
                    href='https://padlet.com/jose_santos1/diariobordo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-700 underline py-2 hover:text-purple-800'
                    >
                    Exemplo 1
                    </a>
                </li>
            </ul>
          </div>
        </div>
      );
    }

export default RecDiario