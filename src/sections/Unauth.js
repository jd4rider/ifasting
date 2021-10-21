/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import './Unauth.scss'

// bootstrap imports
import {Alert} from 'react-bootstrap';

// import navigation
import {Link} from 'react-router-dom';

const Unauth = (props) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    }

    return (
    <>  
        {show && <Alert variant='info' onClose={handleClose} dismissible className="mb-0"><Alert.Heading>Hey, nice to see you</Alert.Heading>Thank you for trying out the app. You will need to <Alert.Link as={Link} to='/Login'>Login</Alert.Link> or <Alert.Link as={Link} to='/Signup'>Signup</Alert.Link> to track your fasts. IT'S FREE!!!</Alert> }
        <div>
        { isPortrait ? 
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ifasting2transm.png'})` }} className="backgroundImage" >
            <h2 className='text' >Start Tracking your 16:8 Fasting today!!!</h2>
        </div> 
        :
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ifasting2trans.png'})` }} className="backgroundImage" >
            <h1 className='text' >Start Tracking your 16:8 Fasting today!!!</h1>
        </div> 
        }
        </div>
    </>
    )
}

export default Unauth;