import React from 'react';
import { Link } from 'react-router-dom';

import minhaImagem from '../src/img/2913127-1.png';
import mascoteCapa from '../src/img/mascote---logo-1.png';
import caboDaRoca from '../src/img/viagemcabodaroca.jpg';
import viagensHome from '../src/img/Sem Título-1.png';

import "./index.css";


function Home() {
  return (
    <div className="justify-center flex">
      <div className="bg-center flex justify-center items-center w-[1440px] h-[2025px] relative overflow-hidden bg-[#202580]">
        <div className="bg-repeat">
        <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[958px] opacity-50" src={minhaImagem}/>
        <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[0px] opacity-50" src={minhaImagem}/>
        </div>
        <div className="w-[1440px] h-[60px] absolute left-px top-[1440px]"></div>
          {/* HEADER AND MENU*/}
          <header className="flex">
            <div className="w-[1440px] h-[250px] absolute left-0 top-[60px] gap-4 pt-4 pb-[30px] bg-[#202580]/70">
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
                {/* HEADER */}
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5">
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[110px] w-[500px] relative overflow-hidden">
                    <p className="flex-grow-0 flex-shrink-0 w-[365px] h-[72px] font-regular font-Anton text-6xl  text-center text-white">
                      PORTUASVIAGENS
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 h-4 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[450px] text-[12px] font-Roboto text-center text-[#9de8ff]/70">
                        Compartilhando experiências de viagem com muita informação e descontração 
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 w-[136px] h-[147px]">
                    <img alt="Mascote-Portuasviagens" src={mascoteCapa} className="w-[136px] h-[147px] absolute left-[519.5px] top-[-0.5px] object-cover" />
                  </div>
                </div>
                      {/* MENU */}
                <div className='flex justify-center font-Anton items-center flex-grow-0 flex-shrink-0 gap-2.5' >
                  <Link to="/Portuasviagens" path="./Home">
                  <button id="home-btn" aria-label="home-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative gap-5 px-5 hover:bg-cyan-200/50'>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className='flex-grow-0 flex-shrink-0'
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5.625 10.5H4.625V11.5V17.5H1V7.03518L9 1.70185L17 7.03518V17.5H13.375V11.5V10.5H12.375H5.625Z"
                        stroke="white"
                        strokeWidth="2"                
                      ></path>
                    </svg>
                    
                  </button>
                  </Link>
                  <Link to="/tips" path="./Tips">
                  <button id="Dicas-btn" aria-label="dicas-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative overflow-hidden border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
                    <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-center text-white'>
                      Dicas
                    </p>
                  </button>
                  </Link>
                  <Link to="/travels" path="./Travels">
                  <button id="Viagens-btn" aria-label="viagens-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
                    <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
                      Viagens
                    </p>
                  </button>
                  </Link>
                  <Link to="/contents" path="./Contents">
                  <button id="Conteudos-btn" aria-label="conteudos-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
                    <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
                      Conteúdos
                    </p>
                  </button>
                  </Link>
                  <Link to="/projects" path="./Projects">
                  <button id="Projetos-btn" aria-label="projetos-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
                    <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
                      Projetos
                    </p>
                  </button>
                  </Link>
                  <Link to="/about" path="./About">
                    <button id="Sobre-btn" aria-label="sobre-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2border-[#99b4fa] hover:bg-cyan-200/50'>
                      <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white">
                        Sobre nós
                      </p>
                    </button>
                  </Link>
                <div>
                  <input className='flex justify-start items-center w-[235px] h-[35px] absolute left-[1100px] top-[180px] gap-5 px-5 py-2 bg-[#202580]/80 border border-[#99b4fa] flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#99b4fa]' type="search" placeholder="Pesquise aqui" />
                </div>
                </div>
              </div>
            </div>
          </header>
      <div className="inline-flex absolute top-[400px] gap-[60px]">
          <p className='w-[585px] h-[30px] text-left text-white'>
            <div style={{width: 1185, height: 630,}}>
              <div className="inline-flex flex-col space-y-14 items-start justify-end" style={{width: 585, height: 406,}}>
                  <p className="text-xl font-bold" >E ai, viajantes!</p>
                  <p className="text-md ">
                    Aqui no Portuasviagens, nós adoramos aventuras, diversão e boa comida (às vezes até tudo junto!). E como não há nada mais emocionante do que explorar novos lugares, decidimos criar este blog para compartilhar nossas aventuras com vocês.
                    <br/><br/><br/>
                    Nós somos amantes de viagens que têm como objetivo trazer para vocês as melhores dicas, curiosidades e histórias engraçadas de nossas viagens pelo mundo. E não se preocupe, não vamos ficar falando só sobre museus e monumentos chatos - nós também vamos falar sobre as melhores comidas, bebidas e atividades divertidas em cada destino.
                  </p>
              </div>
            </div>
          </p>
          <br></br>
        <img className='w-[350px] h-[435.56px]' src={caboDaRoca}></img>
      </div>,
      <div className="inline-flex align-items: center; justify-center absolute  top-[900px]">
        <div>
        <img className='w-[180em] h-[70em] ml-8' src={viagensHome} alt="Imagem de viagens"></img>
        </div>
        <br></br> 
        <p className="justify-center align-items: center; m-20">
          <div className="space-y-8 text-white">
              <p className="text-xl font-bold">Não para por aqui!</p>
              <p className="text-md">
                Aqui no Portuasviagens, nós adoramos aventuras, diversão e boa comida (às vezes até tudo junto!). E como não há nada mais emocionante do que explorar novos lugares, decidimos criar este blog para compartilhar nossas aventuras com vocês.
                <br/><br/>
                Nós somos amantes de viagens que têm como objetivo trazer para vocês as melhores dicas, curiosidades e histórias engraçadas de nossas viagens pelo mundo. E não se preocupe, não vamos ficar falando só sobre museus e monumentos chatos - nós também vamos falar sobre as melhores comidas, bebidas e atividades divertidas em cada destino.
                <br/><br/>
                Se, você ama viajar e experimentar novas culturas? Então, você está no lugar certo! O Portuasviagens é o seu blog de referência para todas as suas aventuras pelo mundo. Aqui, você encontrará dicas, roteiros e experiências incríveis para tornar suas viagens ainda mais especiais.
                <br/><br/>
                Junte-se a nós e comece a explorar o mundo de uma forma única e divertida. Portuasviagens: a sua fonte de inspiração para viagens inesquecíveis. 
              </p>
          </div>
        </p>
      </div>
      </div>
    </div>
   
     
    
    
  )
}

export default Home;



