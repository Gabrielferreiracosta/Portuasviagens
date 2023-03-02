import React from 'react';
import { Link } from 'react-router-dom';

 
import "./index.css";


function Tips() {
  return (
    <div className="justify-center flex">
      <div className="bg-center flex justify-center items-center w-[1440px] h-[2025px] relative overflow-hidden bg-[#202580]">
        <div className="bg-repeat">
          <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[958px] opacity-50" src="./img/2913127-1.png"/>
          <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[0px] opacity-50" src="./img/2913127-1.png"/>
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
                  <img alt="Mascote-Portuasviagens" src="./img/mascote---logo-1.png" className="w-[136px] h-[147px] absolute left-[519.5px] top-[-0.5px] object-cover" />
                </div>
              </div>
                    {/* MENU */}
              <div className='flex justify-center font-Anton items-center flex-grow-0 flex-shrink-0 gap-2.5' >
                <Link to="/home" path="./Home">
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
      </div>
    </div>
     
    
    
  )
}

export default Tips;



