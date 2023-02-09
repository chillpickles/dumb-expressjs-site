import { useState } from 'react';

const points = {
  point: 1,
  point: 2,
  point: 3,
  point: 5,
  point: 8,
  point: 13
};

// const points = [1,2,3,5,8,13];

function ButtonCounter(props){
  const [count,setCount] = useState(0);
  return(
    <button onClick={() => setCount(count + 1)}>
    {props.label}: {count}
    </button>
  );
}

export default function Pointing(){
  return(
    <div>
      <h1>Story Pointing</h1>
      {Object.keys(points)} {<ButtonCounter/>}
    </div>
  );
}