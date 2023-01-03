import React, {useEffect, useState} from 'react';
import './Clock.css';
import moment from 'moment/moment';

export function Clock ({name, click, zone}) {
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState();
  const [time, setTime] = useState([]);
  const loadTime = () => {
    let r = zone;
    setTime(String(moment().utcOffset(Number(r)).format('HH:mm:ss')));
    setLoading(false);
    setUpdated(new Date().getTime());
  }
  const componentDidMount = () => {
    loadTime();
  }
  useEffect(componentDidMount, []);

  const timeoutHandler = () => {
    let timeout;
    if(!loading) {
      timeout = window.setInterval(loadTime, 1000);
    }
    return () => { clearTimeout(timeout)};
  }
  useEffect(timeoutHandler, [loading, updated]);

  
  return (
    <div className='contain'>
      <h4>{name}</h4>
      <div className='cont'>
        <button className='btn' onClick={click}>X</button>
        <p className='date'>{time}</p>
      </div>
    </div>
  )
}
