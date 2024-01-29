import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function AtiABPDrop() {
    return (
        <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:w-1/2">
            <h1 className="text-2xl md:text-4xl text-slate-600 font-bold mb-4">Estratégias</h1>
            <p className="text-slate-600">
            Aqui podemos ver algumas estratégias de avaliação na Aprendizagem Baseada em Projetos.
            </p>
          </div>
    
          
          <div className="w-full py-8 md:w-1/2 ml-0 md:ml-8 pb-8 md:pb-0">
          <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Avaliação por rubricas">
            <h2 className='py-2'>O que é</h2>
            <p className='py-2'>A rubrica é uma breve descrição de procedimentos ou um guia de pontuação que lista e organiza diferentes critérios para classificar o desempenho dos alunos. Estes critérios são chamados indicadores. Os indicadores devem conter quatro itens:</p>
            <ul>
                <li>Descrição detalhada da tarefa</li>
                <li>Aspectos que serão avaliados</li>
                <li>Escalas de diferentes níveis de desempenho</li>
                <li>Descrição dos diferentes níveis de desempenho</li>
                <li>Pode ser utilizada tanto para avaliar projetos quanto para aprendizagem de conteúdos.</li>
            </ul>
            <h2>Tipos</h2>
            <p className='py-2'>Rubrica holística: Oferece indicadores somente voltados para o desenvolvimento do trabalho desenvolvido pelo aluno. Confira um exemplo de rubrica holística aqui. (quadro 4.3)</p>
            <p className='py-2'>Rubrica analítica/descritiva: Possuem múltiplos indicadores que permitem a análise de várias partes da tarefa. Estas são mais preferíveis que as rubricas holísticas, pois fornecem mais orientações aos alunos. Confira um exemplo de rubrica analítica/ descritiva aqui.</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Autoavaliação ">
            <p>Da mesma forma que você está produzindo seu Diário de Bordo, peça aos jovens que também mantenham um, registrando as aulas e principalmente as atividades do Projeto Coletivo. Os registros podem ser em forma de textos, fotos, vídeos, entre outros. Essas anotações vão compor o relato da experiência de seu projeto, importante para o monitoramento da aprendizagem.</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Avaliação de colegas">
            <p>Na seção “Para o Professor”, vamos conhecer uma ferramenta digital para o desenvolvimento do diário. Enquanto isso, para saber mais sobre Diário de Bordo, você pode acessar {' '}
                    <a href="https://sites.google.com/beieducacaopedagogico.com/ef-6-ano-ciclo-2/atividades-do-projeto#:~:text=Na%20se%C3%A7%C3%A3o%20%E2%80%9CPara%20o%20Professor%E2%80%9D%2C%20vamos%20conhecer%20uma%20ferramenta%20digital%20para%20o%20desenvolvimento%20do%20di%C3%A1rio.%20Enquanto%20isso%2C%20para%20saber%20mais%20sobre%20Di%C3%A1rio%20de%20Bordo%2C%20voc%C3%AA%20pode%20acessar%20este%20site." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline hover:text-sky-700'>
                        este site
                    </a>
                .</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 4" title="Avaliação de portfólio">
            <p>Da mesma forma que você está produzindo seu Diário de Bordo, peça aos jovens que também mantenham um, registrando as aulas e principalmente as atividades do Projeto Coletivo. Os registros podem ser em forma de textos, fotos, vídeos, entre outros. Essas anotações vão compor o relato da experiência de seu projeto, importante para o monitoramento da aprendizagem.</p>
          </AccordionItem>
        </Accordion>
          </div>
        </div>
      );
    };

export default AtiABPDrop