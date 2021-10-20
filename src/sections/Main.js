/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthUser } from 'react-auth-kit'
import './Main.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import { Button } from 'react-bootstrap';

const Main = (props) => {
    
    const auth = useAuthUser()
    const [ buttonClass, setButtonClass ] = useState('btn-success btn-edit btn btn-default')
    const [ buttonTitle, setButtonTitle ] = useState('Start Fast');
    const [currUser, setCurrUser] = useState(auth().username);
    const [startDate, setStartDate] = useState();
    const [currDate, setCurrDate] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));
    const [percentageDone, setPercentageDone] = useState(0);
    const [activeDisabled, setActiveDisabled] = useState(false);

    const howlong=16;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${auth().token}` 
    }

    const getAllTrackers = () => {
        axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TRACKERS_GET_ALL}/${auth().username}`, {
            headers: headers
        })
        .then((res)=>{
            if(res.status == 200 || res.status == 201) {
            console.log(res.data)
            }
        })
    }

    const setButtonOn = () => {
        setButtonClass('btn-danger btn-edit btn btn-default');
        setButtonTitle('End Fast');
    }

    const setButtonOff = () => {
        setButtonClass('btn-success btn-edit btn btn-default');
        setButtonTitle('Start Fast');
    }

    const getAllUnfinished = () => {
        axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TRACKER_GET_UNFINISHED}/${auth().username}`, {
            headers: headers
        })
        .then((res)=>{
            if(res.status == 200 || res.status == 201) {
            console.log(res.data)
                console.log(res.data[0].endtime);
                console.log(res.data[0].starttime)
                if(res.data[0].starttime && res.data[0].endtime == null) {
                    setButtonOn();
                    setStartDate(res.data[0].starttime)
                    setPercentageDone((res.data[0].hours/howlong)*100);
                    if(res.data[0].hours >= howlong){
                        setActiveDisabled(false)
                    } else setActiveDisabled(true)
                }
            }
        }) 
    }


    

    const onStart = () => {
        axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TRACKER_START}`, JSON.stringify({username: currUser}), {
          headers: headers
        })
        .then((res)=>{
            if(res.status == 200 || res.status == 201) {
                setButtonOn();
                setPercentageDone(0.0001);
                setActiveDisabled(true);
                setStartDate(new Date().toISOString().slice(0, 19).replace('T', ' '))
            }
            console.log(res)
        })
      }

      const onEnd = () => {
        axios.put(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TRACKER_END}`, JSON.stringify({username: currUser}), {
          headers: headers
        })
        .then((res)=>{
            if(res.status == 200 || res.status == 201) {
                setButtonOff();
                setCurrDate(new Date().toISOString().slice(0, 19).replace('T', ' '))
            }
            console.log(res)
        })
      }

    

    const onClickHandle = () => {
        if(buttonClass === 'btn-success btn-edit btn btn-default') {
            onStart();
            
        } else {
            onEnd(); 
        }
    }



    useEffect (() => {
        getAllUnfinished(); 

    },[])

    return (
    <>
        <CircularProgressbarWithChildren value={percentageDone} text={`${Math.round(percentageDone)}%`}>
            <Button onClick={onClickHandle} style={{'border-radius': '50%'}} size="lg" className={buttonClass} disabled={activeDisabled}>{buttonTitle}</Button>
        </CircularProgressbarWithChildren>
    </>
    )
}

export default Main;