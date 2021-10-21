/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import './Unauth.scss'



const Unauth = (props) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })



    return (
    <>  
        <div>
        { isPortrait ? 
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ifasting2transm.png'})` }} className="backgroundImage" >
            <h1 className='text' >You need to Login or Signup to track your fasts. IT'S FREE!!!</h1>
        </div> 
        :
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ifasting2trans.png'})` }} className="backgroundImage" >
            <h1 className='text' >You need to Login or Signup to track your fasts. IT'S FREE!!!</h1>
        </div> 
        }
        </div>
    </>
    )
}

export default Unauth;