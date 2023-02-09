import { useState } from 'react';

const points = [1,2,3,5,8,13];

function ButtonLabeller(){
  
}

function ButtonCounter(){
  const [count,setCount] = useState(0);
  return(
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default function Pointing(){
  return(
    <div>
      <h1>Story Pointing</h1>
      {points.map(() => <ButtonCounter/>)}
    </div>
  );
}