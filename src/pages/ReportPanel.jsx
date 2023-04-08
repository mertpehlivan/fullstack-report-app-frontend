import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../style/reportpanelstyle.css'
import ReturnForm from './ReturnForm';


const ReportPanel = () => {
    const [tablo, setTablo] = useState([{}]);
    const  {id} = useParams()
    const navigate = useNavigate();
    const [okundu,setOkundu] = useState(false);
    const [donus,setDonus] = useState(false);
  const istek = ()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}reportpage.php?id=${id}`)
      .then(res=>setTablo(res.data))
      .catch(error=>{
        console.log(error)
      })
  }
  
  const del = ()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}delreport.php?id=${id}`)
      .then(res=>setTablo(res.data))
      .catch(error=>{
        console.log(error)
      })
      navigate('/admin')
  }
  const control_okundu = ()=>{
    if(tablo[0].bilgilerim_okundu ==='0'){
        return <div className='but-box'><button className='but' onClick={del}>ONAYLA</button></div>
    }else{
        return(<></>)
    }
  }
  const control_donus = ()=> {
    if(tablo[0].bilgilerim_donus === '0'){
      return(<ReturnForm id={id}/>)
    }else{
        return<></>
    }
  }
  useEffect(() => {
    istek()
    
    
  }, []);
    return (
        
          <div className='report-page'>
              <div className="paper">
              <div className="paper-content">
              <div className="headers-page"><h2 className="headers-page">{`${tablo[0].bilgilerim_konubasligi}`}</h2></div> 
              <div className="texts-page"><p className="texts-page" >{`${tablo[0].bilgilerim_icerik}`}</p></div> 
              <div className="bottom_box">{`${tablo[0].bilgilerim_tarih}`}</div>
              </div>
              </div>

              <div>
                {control_donus()}
                {control_okundu()}
                
              </div>
          </div>
      

    );
}

export default ReportPanel;
