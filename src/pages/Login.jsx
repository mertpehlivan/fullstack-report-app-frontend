import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
            axios.post(`${process.env.REACT_APP_BASE_URL}login.php`, {
            email: email,
            password: password,
            },{
                withCredentials: true
            }   
            ).then((response)=>{
                if (response.data.success) {
                    navigate("/admin");
                }else {
                    alert('Invalid email or password');
                }
            }).catch((err)=>console.error(err));
        
        window.location.reload(false);
    }
   
    
    return (
        <div className='login-box'>
            
            <h1>ADMİN LOGİN</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="exampleInputEmail1" placeholder="Enter email"/>
                    <small>We'll never share your email with anyone else.</small>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div >
                    <input type="checkbox" id="exampleCheck1"/>
                    <label htmlFor="exampleCheck1">Check me out</label> 
                </div>
                <button name='btn' type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Login;
