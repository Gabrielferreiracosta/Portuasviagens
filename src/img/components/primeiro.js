import React from "react"
import './public/src/components/global.css';

function Primeiro() {
    return (

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
        </div>
        
    
    )
}

export default Primeiro



