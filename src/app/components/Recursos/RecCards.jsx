import React from 'react';
import { GiShinyApple } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";

const RecCards = () => {
  return (
    <div className="py-16 bg-slate-100 overflow-hidden">
      <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
        <div>
          
          <h2 className="mt-4 text-2xl text-slate-700 font-bold md:text-4xl">Recursos</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
                <GiShinyApple className='text-3xl hover:text-primary'/>
              <div className="space-y-2">
                <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para o professor</h5>
                <p className="text-sm text-gray-600">Google sites em sala de aula: Dicas para professores</p>
                <p className="text-sm text-gray-600">Google sites: como utilizar em sua escola?</p>
              </div>
              
            </div>
          </div>
          
          <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
                <PiStudentBold className='text-3xl hover:text-primary'/>
              <div className="space-y-2">
                <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para o estudante</h5>
                <p className="text-sm text-gray-600">Uso pedagógico do Google Sites</p>
                <p className="text-sm text-gray-600">Como criar interação e produção de conteúdos pelos alunos.</p>
              </div>
              
            </div>
          </div>

          <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
                <IoRocket className='text-3xl hover:text-primary'/>
              <div className="space-y-2">
                <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary">Para saber mais</h5>
                <p className="text-sm text-gray-600">Surpreenda-se com o poder do Google Sites em sala de aula</p>
                <p className="text-sm text-gray-600">Como usar o Google Sites em sala de aula</p>
                <p className="text-sm text-gray-600">Ideias de uso on-line</p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecCards;

