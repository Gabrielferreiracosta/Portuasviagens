import React from "react"
import './global.css';

function Menu() {
    return (
      <div className='flex justify-center font-Anton items-center flex-grow-0 flex-shrink-0 gap-2.5'>
        <button id="home-btn" aria-label="home-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative gap-5 px-5 hover:bg-cyan-200/50'>
          <svg
             width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex-grow-0 flex-shrink-0' preserveAspectRatio="none">
          <path
             d="M5.625 10.5H4.625V11.5V17.5H1V7.03518L9 1.70185L17 7.03518V17.5H13.375V11.5V10.5H12.375H5.625Z" stroke="white" strokeWidth="2">
          </path>
          </svg>
        </button>
        <button id="Dicas-btn" aria-label="dicas-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative overflow-hidden border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
          <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-center text-white'>
            Dicas
          </p>
        </button>
        <button id="Viagens-btn" aria-label="viagens-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
          <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
            Viagens
          </p>
        </button>
        <button id="Conteudos-btn" aria-label="conteudos-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
          <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
            Conteúdos
          </p>
        </button>
        <button id="Projetos-btn" aria-label="projetos-btn"  className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
          <p className='flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white'>
            Projetos
          </p>
        </button>
        <button id="Sobre-btn" aria-label="sobre-btn" className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] h-[35px] relative border-t-0 border-r-0 border-b-0 border-l-2 border-[#99b4fa]  hover:bg-cyan-200/50'>
          <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-white">
            Sobre nós
          </p>
        </button>
        <div>
          <input className='flex justify-start items-center w-[235px] h-[35px] absolute left-[1100px] top-[180px] gap-5 px-5 py-2 bg-[#202580]/80 border border-[#99b4fa] flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#99b4fa]' type="search" placeholder="Pesquise aqui"/>
        </div>
      </div>


    )
}

export default Menu()


