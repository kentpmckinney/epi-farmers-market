import React from 'react';
import './InfoDisplay.css'

function InfoDisplay(props) {
  return (
    <React.Fragment>
      <div className='infolabel'>{props.label}</div>
      <br/>
      <div className='infopanel'><center>{props.info}</center></div>
    </React.Fragment>
  );
}

export default InfoDisplay;