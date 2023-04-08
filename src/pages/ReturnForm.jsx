import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReturnForm = ({id}) => {
    const [email, setEmail] = useState('');
    const [emailKonu, setEmailKonu] = useState('');
    const [emailIcerik, setEmailIcerik] = useState('');
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        
        
        axios.post(`${process.env.REACT_APP_BASE_URL}mailGonderme/mail.php?id=${id}`, {email,emailKonu,emailIcerik}  
            ).then((response)=>{
                alert("Mail Gönderildi")
                navigate("/admin");
            }).catch((err)=>console.error(err));
        
        window.location.reload(false);
    }
    return (
        <div className='form'>
            
  <div class="containers">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>MAİL</span>
            <span>GÖNDER</span>
          </div>
          <div class="app-contact"><h3>{">>>>>>>>>>>>>>>>"}</h3></div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
            </div>
            <div class="app-form-group">
              <input value={email} onChange={(e)=>setEmail(e.target.value)}  class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input value={emailKonu} onChange={(e)=>setEmailKonu(e.target.value)} class="app-form-control" placeholder="KONU BAŞLIĞI"/>
            </div>
            <div class="app-form-group message">
              <textarea value={emailIcerik} onChange={(e)=>setEmailIcerik(e.target.value)} class="app-form-control" placeholder="MESAJ"/>
            </div>
            <div class="app-form-group buttons">
              
              <button class="app-form-button" onClick={handleSubmit}>GÖNDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


        </div>
    );
}

export default ReturnForm;
