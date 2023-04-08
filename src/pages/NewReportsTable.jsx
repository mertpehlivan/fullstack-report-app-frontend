import React,{useState,useEffect} from 'react';

import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const NewReportsTable = () => {
    const [tablo, setTablo] = useState([{}]);
    const navigate = useNavigate();
  const istek = ()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}newreporttable.php`)
      .then(res=>setTablo(res.data))
  }
  
  useEffect(() => {
    istek()
  }, []);
    return (
        <div className='container-comment'>
          
           <main class="table">
                <section class="table__header">
                    <h1>YENİ GELEN ŞİKAYETLER</h1>
                   
                    
                </section>
                <section class="table__body">
                    <table>
                        <thead>
                            <tr>
                                <th> Şikayet İd </th>
                                <th> Şikayet Eden No </th>
                                <th> Şikayet İçeriği </th>
                                <th> Şikayet Okundu </th>
                                
                                <th> Şikayet Tarih </th>
                                <th> Şikayet Kategori</th>
                                <th>  </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          {tablo.map((user,index) => (
                            <tr key={index}>
                              <td>{user.bilgilerim_id}</td>
                              <td>{user.bilgilerim_email}</td>
                              <td> {user.bilgilerim_icerik} </td>
                              <td> {user.bilgilerim_okundu}</td>
                             
                              <td>{user.bilgilerim_tarih}  </td>
                              <td>
                                  <p class="status delivered">{user.bilgilerim_konubasligi}</p>
                              </td>
                              
                              <td><button class="btn" onClick={()=>navigate(`/admin/sikayetler/${user.bilgilerim_id}`)}>Detay Gör</button></td>
                              
                            </tr>
                            
                          )
                          )}
                          
                            
                            
                        </tbody>
                    </table>
                </section>
            </main>
            </div>
)}

export default NewReportsTable;
