import React,{useState,useEffect} from 'react';
import {Error,LibraryBooks,DoneAll} from '@mui/icons-material';
import axios from 'axios'
import {useNavigate } from 'react-router-dom';
const Dashboard = () => {


    
    const navigate = useNavigate()
    const [sikayetCount, setSikayetCount] = useState({});
    const istek = ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}counter.php`)
        .then(res=>setSikayetCount({
            donus:res.data.donus.toplam,
            kayit:res.data.toplamkayit.toplam,
            okundu:res.data.okundu.toplam
        }))
    }
   useEffect(() => {
        istek()
    }, []);
    
    return (
        <div className='dashboard'>
           
            
           <div className='top-dashboard'>
                <div className='counter-box error' onClick={()=>{navigate("/admin/productList")}}>
                    <div className="counter-icon"><Error style={{fontSize: 190}}/></div>
                    <div className="counter-text">
                        <span className='counter-header'>Geri Dönüş Bekleyen Şikayetler</span>
                        <span className='count'><h3>{sikayetCount.donus}</h3></span>
                    </div>
                </div>
                <div className='counter-box'>
                <div className="counter-icon" onClick={()=>{navigate("/admin/comment")}}><LibraryBooks style={{fontSize: 190}}/></div>
                
                    <div className="counter-text">
                        <span className='counter-header'>Toplam Şikayet Sayısı </span>
                        <span className='count'><h3>{sikayetCount.kayit}</h3></span>
                    </div>
                
                </div>
                <div className='counter-box check'>
                <div className="counter-icon"><DoneAll style={{fontSize: 190}}/></div>
                    <div className="counter-text">
                        <span className='counter-header' onClick={()=>{navigate("/admin/product")}}>Okunmayı Bekleyen Şikayetler</span>
                        <span className='count'><h4>{sikayetCount.okundu}</h4></span>
                    </div>
                </div>
           </div>
           <div className='bottom-dashboard'>
           
                    <div className="media-box">
                        <a href="#" className='icons' title="Join us on Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <h1>INSTAGRAM</h1>
                        <span>baum_erznc24</span>
                    </div>
                    <div className="media-box">
                        <a href="#" className='icons' title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <h1>TWİTTER</h1>
                        <span>baum_erznc24</span>
                    </div>
                    <div className="media-box">
                        <a href="#" className='icons' title="Join us on Linked In"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <h1>LİNKEDİN</h1>
                        <span>baum_erznc24</span>
                    </div>
                   
                </div>
            
        </div>
    );
}

export default Dashboard;