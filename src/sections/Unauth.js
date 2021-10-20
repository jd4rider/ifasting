/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Unauth.scss'



const Unauth = (props) => {


    return (
    <>  
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ifasting2trans.png'})` }} className="backgroundImage" >
        <h1 className='text' >You need to Login or Signup to track your fasts. IT'S FREE!!!</h1>
        </div>
    </>
    )
}

export default Unauth;