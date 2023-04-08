import React,{useState,useEffect} from 'react';
import {Search} from '@mui/icons-material'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const ReturnReports = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(true);
    const [tablo, setTablo] = useState([{}]);
    const istek = ()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/returnreport.php`)
        .then(res=>setTablo(res.data))
    }
    const change = ()=>{setCheck(!check)}
    const control = (data)=>{
        if(data == 0){
            return true
        }else{
            return false
        }
    }
    const see=() =>{
        if(check){
            return tablo.map(user =>(control(user.bilgilerim_donus) && <tr>
                <td>{user.bilgilerim_id}</td>
                <td>{user.bilgilerim_email}</td>
                <td> {user.bilgilerim_icerik} </td>
                <td> {user.bilgilerim_donus}</td>
            
                <td>{user.bilgilerim_tarih}  </td>
                <td>
                    <p class="status delivered">{user.bilgilerim_konubasligi}</p>
                </td>
                
                <td><button class="btn" onClick={()=> navigate(`/admin/sikayetler/${user.bilgilerim_id}`) }>Geri Dönüş Yap</button></td>
                
                </tr>   

          ))
        }else{
        
            return tablo.map(user =>(
                   
                <tr>
                <td>{user.bilgilerim_id}</td>
                <td>{user.bilgilerim_email}</td>
                <td> {user.bilgilerim_icerik} </td>
                <td> {user.bilgilerim_donus}</td>
            
                <td>{user.bilgilerim_tarih}  </td>
                <td>
                    <p class="status delivered">{user.bilgilerim_konubasligi}</p>
                </td>
                
                <td><button class="btn" onClick={()=> navigate(`/admin/sikayetler/${user.bilgilerim_id}`) }>Geri Dönüş Yap</button></td>
                
                </tr>

          ))
        }
    }

    useEffect(() => {
      istek()
    }, []);
    return (
        <div className='container-comment'>
          
           <main class="table">
                <section class="table__header">
                    <h1>GERİ DÖNÜŞ BEKLEYEN ŞİKAYETLER</h1>
                    
                    <div class="input-group">
                        <input type="search" placeholder="Search Data..."/>
                        <Search/>
                        
                    </div>
                    
                </section>
                <section class="table__body">
                    <table>
                        <thead>
                            
                            <tr>
                                <th> Şikayet İd </th>
                                <th> Şikayet Eden No </th>
                                <th> Şikayet İçeriği </th>
                                <th> Şikayet Dönüş </th>
                                
                                <th> Şikayet Tarih </th>
                                <th> Şikayet Kategori</th>
                                <th><input type="checkbox" onChange={change}/> Geri Dönüş Yapılanlarıda Göster  </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          {see()}
                        </tbody>
                    </table>
                </section>
            </main>
            </div>
        
    );
}

export default ReturnReports;
