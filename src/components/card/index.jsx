import React, { useEffect, useState } from 'react';

import './index.css';

function Card(props) {

  const buttonStyle = {
  
  };

  useEffect(() =>{
    // console.log("Props", props);

  },[props])

  const setAnswer = (k,l) => {
    props.sendKey(k, l);
  }

  return(
    <>
      <div className="card">
        <div className="card-title">
          { props.layer[props.index] != null ? <>
          {console.log(props)}
            <p>{props.layer[props.index].q}</p>
            <div className="card-body">
          { props.layer[props.index].opt.map((opt) =>
            <button style={buttonStyle} onClick={() => setAnswer(opt.key, opt.layer_key)} key={opt.answer}>{opt.answer}</button>
          )
          }
         
            </div>
            
          </> : null

          }
         
        </div>
        

      </div>
    </>
    
  );

}
export default Card