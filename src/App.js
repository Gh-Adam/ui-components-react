import React from 'react';
import './App.css';
import { FaAngellist } from 'react-icons/fa';
import { FiAlertOctagon } from 'react-icons/fi' 
import { IconContext } from 'react-icons/lib';
import { BsFillCollectionFill } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{color: 'blue', size: '6rem'}} >
        <FaAngellist color="red" size="10rem" />
        <BsFillCollectionFill />
        <FiAlertOctagon />
      </IconContext.Provider>
    </div>
  );
}

export default App;
