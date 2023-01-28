import { useRef, useState } from 'react';
import './index.css';

function Home(props) {

  return (
    <div className='home'>
      <div className='homeHolder'>
        <div className='homesplitter homesplitterimg'><img className='homelogo' src='isklogo.png'></img></div>
        <div className='homesplitter homesplitterinp'><input></input></div>
      </div>
    </div>
  )

}

export default Home;