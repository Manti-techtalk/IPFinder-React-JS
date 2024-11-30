import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import style from './Side.module.css';

function Side() {
  const [ipdata, setIpdata] = useState('');
  const [location, setLocation] = useState('');
  const [isp, setIsp] = useState('');

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = () => {
    axios.get('https://api-bdc.net/data/client-ip') 
      .then(res => {
        const data = res.data;
        setIpdata(data.ip);
        setLocation(data.city + ', ' + data.region + ', ' + data.country);
        setIsp(data.org);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  };

  const handleIp = (e) => {
    setIpdata(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleIsp = (e) => {
    setIsp(e.target.value);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="container">
      <div className="box">
        <p className="title is-4">What Is My IP Address:</p>
        <input className="input" value={ipdata} type="text" placeholder='IP address' onChange={handleIp} />
        
        <p className="title is-4">Approximate Location:</p>
        <input className="input" value={location} type="text" placeholder='Location' onChange={handleLocation} />
        
        <p className="title is-4">Internet Service Provider:</p>
        <input className="input" value={isp} type="text" placeholder='Internet Service Provider' onChange={handleIsp} /><br/><br/>
        
        <button onClick={handleClick} className="button is-primary">Find</button>
      </div>
    </div>
  );
}

export default Side;
