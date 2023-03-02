import React from "react";
import './index.css';
import Home from "./Home";
import { Link } from "react-router-dom";

function About() {
    return (
        <Home></Home>,
        <div className="justify-center flex">
        <div className="bg-center justify-center items-center w-[1440px] h-[2025px] relative overflow-hidden bg-[#202580]">
            <div className="bg-repeat">
            <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[958px] opacity-50" src="./img/2913127-1.png" />
            <img alt="background" className="w-[1440px] h-[1097px] absolute left-[0px] top-[0px] opacity-50" src="./img/2913127-1.png" />
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
                    <Link to='/' path='./Home'>
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
                    <div >
                    <input className='flex justify-start items-center w-[235px] h-[35px] absolute left-[1100px] top-[180px] gap-5 px-5 py-2 bg-[#202580]/80 border border-[#99b4fa] flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#99b4fa]' type="search" placeholder="Pesquise aqui" />
                    </div>
                </div>
                </div>
            </div>
            </header>
       
        <div className='flex items-center absolute top-[400px] gap-[60px] p-5 rounded-md bg-[#61b1fb]/50'>
            <div className='flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-[45px] px-5'>
                <p className='flex-grow-0 flex-shrink-0 w-[585px] h-[29px] text-left text-white'>
                    <span className='flex-grow-0 flex-shrink-0 w-[585px] h-[29px] text-lg font-Anton text-left text-white'>
                        Quem está por trás do Portuasviagens?
                    </span>
                </p>
                <p className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                        Meu nome é Iran, sou um rapaz latino americano sem dinheiro no banco e sem parentes
                        importantes mas que vive no exterior. Já são 6 anos vivendo nesse mundão. Portugal,
                        Espanha e Bélgica são os lugares onde eu morei.
                    </span>
                    <br />
                    <br />
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                        Desde então estou aqui na Terrinha Tuga. Foi daqui que consegui conhecer também países
                        como Cabo Verde, Eslovênia, Eslováquia, Hungria, Rússia, Chequia, Áustria, Alemanha e
                        Itália.
                    </span>
                    <br />
                    <br />
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                        Assim sigo contando além de países (são ao todo 17) memórias, experiências e muitos
                        amigos.
                    </span>
                    <br />
                </p>
            </div>
            <img alt="Iran" src="./img/foto_site-1.jpeg" className='flex-grow-0 flex-shrink-0 w-[350px] h-[435.56px] object-cover' />
        </div>,
        <div>
            <div className='flex items-center w-[1075px] absolute left-[183px] top-[970px] gap-[50px] py-5 rounded-md bg-[#61b1fb]/50'>
                <img alt="Gabriel" src="./img/foto2_site-1.jpeg" className='flex-grow-0 flex-shrink-0 w-[350px] h-[437.69px] object-cover' />
                <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[538px] relative gap-[35px] pl-5 pr-[433px]'>
                <h3 className='flex-grow-0 flex-shrink-0 w-[585px] h-[29px] text-lg font-Anton text-left text-white'>
                    Quem somos nós?
                </h3>
                <p className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                    Meu nome é Gabriel, vindo de Pernambuco, sou Nordestino! Resolvi desbravar novos
                    horizontes e acabei aqui em Portugal desde 2018. A facilidade de viajar na Europa me fez
                    despertar um desejo imenso de conhecer cada pedaço desse planeta que vivemos.
                    </span>
                    <br /><br />
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-roboto text-left text-white'>
                    Sobre viagens? Até agora conto com 6 países, bem longe do meu amigo Iran. Brincadeiras a
                    parte, a vida é um sopro e como muitos dizem por isso devemos aproveitar para conhecer ao máximo. Então embarque com a gente nessa aventura e vamos desbravar
                    juntos esse mundo por meio dos nossos canais.
                    </span>
                    <br />
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'></span>
                    <br />
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                    Quer conhecer um pouquinho mais sobre tudo isso? Se liga então no blog de viagens e todas
                    as dicas que passamos para vocês.
                    </span> 
                    <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular font-roboto text-left text-white'>
                    Aproveita e acompanha a gente nas redes sociais e no Youtube!
                    </span>
                </p>
                </div>
            </div>
        </div>,
        <div className='flex justify-center items-center w-[1075px] h-[450px] absolute left-[185px] top-[1540px] gap-[50px] py-5 rounded-md bg-[#61b1fb]/50'>
            <div className='flex flex-col justify items-center flex-grow-0 flex-shrink-0 h-[350px] w-[522px] relative gap-10'>
            <p className='flex-grow-0 flex-shrink-0 w-[469px] text-lg font-Anton text-center text-white'>
                Além do Portuasviagens...
            </p>
            <div>
                <p className='flex-grow-0 flex-shrink-0 w-[469px] font-regular text-left text-white'>
                <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                Quando começamos o canal nosso objetivo era apenas compartilhar experiências e dicas para
                    ajudar nossos amigos em suas viagens.
                </span>
                <br /><br />
                <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'>
                    Acontece que fomos aos poucos aprendendo a desenvolver midias digitais e geri-las em
                    nossas redes sociais, canal de Youtube e até mesmo esse blog.
                </span>
                <br /><br />
                <span className='flex-grow-0 flex-shrink-0 w-[469px] text-base font-regular text-left text-white'
                >Hoje desenvolvemos midias digitais não apenas para nossos telespectadores mas também para
                    pessoas que desejam expansão no mercado digital.
                </span>
                <br /><br />
                </p>
            </div>
            </div>
        </div>
    </div>
    </div>
        
    
    )
}

export default About;



