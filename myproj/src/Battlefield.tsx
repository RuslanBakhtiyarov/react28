import  React from "react";

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const Cell = ({handleClick,value,x,y}: CellProps) => {
  return <button className={'cell'} onClick={()=>handleClick(x,y)}>{value}</button>;
}

type BattlefieldProps = {
  matrix: number[][]
  onFire: (y:number, x:number) => void;
}

export const Battlefield = ({matrix, onFire}:BattlefieldProps) => {
  return <div>
    {matrix.map((line, lineNamber) => (
      <div key={lineNamber}>
        {line.map((v,i) => (
          <Cell key={`${lineNamber}${i}`} value={v} y={lineNamber} x={i} handleClick={onFire}/>
        ))}
      </div>
    ))}
  </div>;
}