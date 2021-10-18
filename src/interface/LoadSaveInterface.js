// Importing individual react components 
import React, { useState, useEffect } from 'react'; 
import { useAuthUser } from 'react-auth-kit'
import axios from 'axios';

//Bootstrap Import
import Form from 'react-bootstrap/Form';

const LoadSave = (props) => {
    const auth = useAuthUser()
    let title = '';
    let html = '';
    let css = '';
    let js = '';
    if(props.data) {
      html = props.data.html;
      css = props.data.css;
      js = props.data.js;
    }
    const [formData, setFormData] = useState({title: title,
                                              html: html,
                                              css: css,
                                              js: js,
                                              username: auth().username
                                              })
    


    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${auth().token}` 
    }
    
    const onSubmit = () => {
      axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_WORKSPACE_SAVE}`, JSON.stringify(formData), {
        headers: headers
      })
      .then((res)=>{
        if(res.status == 200 || res.status == 201) {
          props.loader();
          setTimeout(()=>{
            props.setLoading(true);
            props.handleClose();
          }, 1000)
          
        }
      })
    }

    useEffect( () => {
      props.setformSubmitMethod(onSubmit);
    });
  
    return (
  
            <Form>
            
                <Form.Group controlId="formGridName">
                  <Form.Label>Workspace Title</Form.Label>
                  {/* {!props.data && <Form.Control placeholder="!example" onChange={(e)=>setFormData({...formData, tname: e.target.value})} />}
                  {props.data && <Form.Control value={formData.tname} onChange={(e)=>setFormData({...formData, tname: e.target.value})} />} */}
                  <Form.Control  onChange={(e)=>setFormData({...formData, title: e.target.value})} />
                </Form.Group>
                <br />
                {/* <Form.Group controlId="formGridAction">
                  <Form.Label>Trigger Action</Form.Label>
                  {!props.data && <Form.Control as="textarea" rows={3} placeholder="Come follow us on Twitch" onChange={(e)=> {setFormData({...formData, taction: e.target.value})}}/>}
                  {props.data && <Form.Control as="textarea" rows={3} value={formData.taction} onChange={(e)=> {setFormData({...formData, taction: e.target.value})}}/>}
                </Form.Group> */}

            </Form> 
    );
  }

  export default LoadSave; 