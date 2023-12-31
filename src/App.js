import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // create realting variables
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);
  
  function updateTime() {
    const time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
    setSecond(time.getSeconds());
  }
  
  useEffect(() => {
    updateTime();
    setInterval(updateTime, 1000);
  }, [])

  return (
    <div className="App">
      <div className='Time-container'>
        <div className='Hour-container Time-page Common-page'>{hour}</div>
        <div className='Colon-page Common-page'>:</div>
        <div className='Minute-container Time-page Common-page'>{minute}</div>
        <div className='Colon-page Common-page'>:</div>
        <div className='Second-container Time-page Common-page'>{second}</div>
      </div>
    </div>
  );
}

export default App;
