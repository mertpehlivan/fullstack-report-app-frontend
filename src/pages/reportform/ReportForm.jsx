import React, { useState,useEffect } from 'react';
import './ReportForm.css'
import logo from '../images/Erzincan_Binali_Yıldırım_University_logo.svg'
import axios from 'axios';
const ReportForm = () => {
    const [reqkategori, setreqKategori] = useState([]);
    const [kategori, setKategori] = useState('');
    const [icerik, setIcerik] = useState('');
    const [email,setEmail] = useState('');
    const [see, setSee] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const controlEmail = ()=>{
        if(see){
            return email
        }
        return "yok"
    }
    
    const istek = ()=>{
        axios
        .get(`${process.env.REACT_APP_BASE_URL}category.php`)
        .then((res) => {
            setreqKategori(res.data)
            setLoading(false)}
        );
    }
    useEffect(() => {
        setLoading(false);
        istek()
    }, []);
    const handleSubmit = (event)=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}addReport.php`,{
            kategori:kategori,
            icerik:icerik,
            email:controlEmail(),
            donus : see ? 1 : 0
        }).then((res)=>{
            setLoading2(false)
        })
    }
    if(loading && loading2){
        return <div>Loading...</div>
    }
    return (
        <div className="report-page-container">
            <div className="blur">
                <div className="report-form-box">
                <form onSubmit={handleSubmit} class="demo-form1">
                    <div className='logo-top'>
                        <img className='logoimg' src={logo} alt="logo"/>
                        <span><h3>Tüm Şikayet ve İstekler</h3></span>
                    </div>
                        
                        <div class="input-wrap">
                            <label class="f-title" for="gender">Kategori</label>
                            <select class="input" id="gender" name="gender" value={kategori} onChange={(e)=>setKategori(e.target.value)}>
                                <option selected disabled>Kategori</option>
                                {reqkategori.map((katego,index)=> <option key={index} value={katego.kategori_ad}>{`${katego.kategori_ad}`}</option>)}
                            </select>
                        </div>
                        <div class="input-wrap">
                            <textarea name="message" id="message" class="textarea" value={icerik} onChange={(e)=>setIcerik(e.target.value)}></textarea>
                        </div>

                        <div class="input-wrap">
                            <label class="f-title" for="edu1">Geri dönüş istermisiniz?</label>
                            <input class="radio-label" type="checkbox" onClick={()=>setSee(!see)} id="edu1"/>
                        </div>
                        {see && <div class="input-wrap">
                            <label class="f-title" for="email">E-Posta Adresiniz</label>
                            <input type="email" id="email" name="email" class="input" placeholder="E-Posta Adresiniz" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>}
                        <input type="submit" id="submit" name="submit" value="FORMU GÖNDER"/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReportForm;
