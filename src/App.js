import React ,{ useState, useEffect } from 'react'
import './App.css';
const App = () => {
  const endDate = "16 Aug 2023 10:00 AM";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);


  const updateCountdown = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    
    setDays(Math.floor(diff / 3600 / 24));
    setHours(Math.floor(diff / 3600) % 24);
    setMinutes(Math.floor(diff / 60) % 60);
    setSeconds(Math.floor(diff % 60));
  };

 
  return (
    <div className='main'>
      <div className="overlay">
        <div className="title">We are Coming soon</div>
        <div className="title" id='end-date'>{endDate}</div>
        <div className="col">
          <div>
          <input type='text' readOnly value={days} />
          <br/>
          <label>Days</label>
          </div>
          <div>
          <input type='text' readOnly value={hours} />
          <br/>
          <label>Hours</label>
          </div>
          <div>
          <input type='text' readOnly value={minutes}/>
          <br/>
          <label>Minutes</label>
          </div>
          <div>
          <input type='text'  readOnly value={seconds}/>
          <br/>
          <label>Second</label>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App