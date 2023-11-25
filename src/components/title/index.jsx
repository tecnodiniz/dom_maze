import React from 'react';

import './index.css';
import logo from '../../assets/img/logo3.jpg'

function Title ()  {
  return (
  <div className='title'>
    <div className='logo'>
      <img src={logo} alt="Divina Ordem Mística" />
    </div>
    <div>
      <h2>DIVINA ORDEM MíSTICA</h2>
      <p>A grande sabedoria é entender o planejado no etéreo</p>
    </div>
    
  </div>
  );

}
export default Title;