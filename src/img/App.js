import React from 'react';
import Menu from './components/menu';
import Primeiro from './components/primeiro';
import Second from './components/second';
import Third from './components/Third';
import './global.css';


function App() {
  return (
      
      <div className='bg-center flex justify-center items-center w-[1440px] h-[2025px] relative overflow-hidden bg-[#202580]'>
            <div className='bg-repeat'>
              <img alt="background" className='w-[1440px] h-[1097px] absolute left-[0px] top-[958px] opacity-50' src="./img/2913127-1.png" />
              <img alt="background" className='w-[1440px] h-[1097px] absolute left-[0px] top-[0px] opacity-50' src="./img/2913127-1.png" />
            </div>
            <div className='w-[1440px] h-[60px] absolute left-px top-[1440px]'></div>
          <Menu></Menu>
          <Primeiro></Primeiro>
          <Second></Second>
          <Third></Third>
      </div>
  
  );
}

export default App



