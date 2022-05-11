import React from 'react';
import { HeaderWithCounter } from './HeaderWithCounter';
import { Battlefield } from './Battlefield';
import { ResetBotton } from './ResetBotton';
import { useGameState } from './state/useGameState';
 
import './App.css';



export default function App() {
  const {reset,turn,matrix } = useGameState();
  const onFire = (y:number, x:number) => console.log(y, x);
  
  return <div className="app">
    <HeaderWithCounter turn={turn}/>
    <Battlefield matrix={matrix} onFire={onFire}/>
    <ResetBotton reset={reset}/>
  </div>
};
