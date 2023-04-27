import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [apiRes, setApiRes] = useState([])



  useEffect(()=>{

    fetch("http://localhost:9000/testAPI")
    .then(res=>res.json())
    .then((res)=>setApiRes(res))
  

  },[])
 

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <div className='items'>
        <p className='title'>Below is the data fetch from api server</p>
        <p className='title'>"http://localhost:9000/testAPI"</p>
          {apiRes.map((item,index)=>{
          const {name, age, sport} = item;
          return(
            <div className="div">
              <span className='span-detial'>{`Name: ${name} `}</span>
              <span className='span-detial'>{`Age: ${age}`}</span>
              <span className='span-detial'>{`Sport: ${sport}`}</span>
            </div>
          )

        })}</div>
        {console.log(apiRes[0])}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
