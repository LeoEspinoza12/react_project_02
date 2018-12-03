import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

  if(!props.switch) {
    console.log('it was true')
    return <div className='BackdropOne'></div>;
  } else {
    console.log('it was false')
    return <div className='BackdropTwo'></div>;
  }

};

export default backdrop;