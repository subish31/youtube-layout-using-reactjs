import React from 'react';
import ReactDOM from 'react-dom';
import Left from './left.js';
import Top from './top.js';
import Cont from './content.js';

function All(){
  return(
    <div>
      <Left/>
      <Top/>
      <Cont/>
    </div>
    
  )
}

ReactDOM.render(<All/>,document.getElementById('root'));