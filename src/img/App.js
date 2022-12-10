import React from 'react';
import Menu from './components/menu';
import Primeiro from './components/primeiro';
import Second from './components/second';
import Third from './components/Third';
import './public/src\img/components/global.css';


function App() {
  return (
      
      <div className='bg-center flex justify-center items-center w-[1440px] h-[2025px] relative overflow-hidden bg-[#202580]'>
          <Menu></Menu>
          <Primeiro></Primeiro>
          <Second></Second>
          <Third></Third>
      </div>
  
  );
}

export default App



