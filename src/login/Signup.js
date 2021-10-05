import React from "react";
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { Form, Button } from 'react-bootstrap';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useHistory } from 'react-router-dom';
import './Signup.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Signup = () => {
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({username: '', password: '', fname: '', lname: ''})
    let [loading, setLoading] = React.useState(true);
    let [color] = React.useState("#FF0000");
    let history = useHistory();


    function validateForm() {
        return formData.username.length > 0 && formData.password.length > 0;
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_SIGNUP}`, formData)
            .then((res)=>{
                if(res.status === 200){
                    if(signIn({token: res.data.token,
                               expiresIn: 60,
                               tokenType: "Bearer",
                               authState: res.data})){ 
                        history.push(process.env.REACT_APP_PUBLIC_URL)
                    }else {
                        //Throw error
                    }
                }
            })
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent"  className={!loading ? 'grayout' : null}>

                <Form onSubmit={onSubmit}>
                    <Form.Group size="lg" controlId="login" >
                        <Form.Label>First Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type={"username"}
                                value={formData.fname}
                                onChange={(e)=>setFormData({...formData, fname: e.target.value})}
                            />
                    </Form.Group>
                    <Form.Group size="lg" controlId="login" >
                        <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type={"username"}
                                value={formData.lname}
                                onChange={(e)=>setFormData({...formData, lname: e.target.value})}
                            />
                    </Form.Group>
                    <Form.Group size="lg" controlId="login" >
                        <Form.Label>Username</Form.Label>
                            <Form.Control
                                type={"username"}
                                value={formData.username}
                                onChange={(e)=>setFormData({...formData, username: e.target.value})}
                            />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={formData.password}
                                onChange={(e)=>setFormData({...formData, password: e.target.value})}
                            />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()} onClick={() => setLoading(!loading)}>
                        Signup
                    </Button>
                </Form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
                


            </div>
            <br />
            <FadeLoader color={color} loading={!loading} css={override} size={150} />
        </div>


    )
}

export default Signup;