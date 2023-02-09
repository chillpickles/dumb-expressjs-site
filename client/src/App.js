// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';

export default function Pointing() {
  const [count,setCount] = useState(0);
  function YouVoted() {
    alert('your expertise has been considered');
  }
  function handleClick() {
    setCount(count +1);
  }
  return (
    <div>
      <h1>Welcome to Standup</h1>
      <PointingOne count={count} onClick={handleClick} />
      <PointingTwo count={count} onClick={handleClick} />
    </div>
  );
}

function PointingOne({ count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function PointingTwo({ count, onClick}) {
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
