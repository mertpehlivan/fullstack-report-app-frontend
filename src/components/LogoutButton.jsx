import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function LogoutButton() {
  const navigate = useNavigate()
  function handleDeleteAccount() {
    axios.delete(`${process.env.REACT_APP_BASE_URL}session_del.php`, {
      withCredentials: true,
    })
    .then((response) => {
      if(response.data.success){
        navigate("/login")
      }
    })
    .catch((error) => {
      console.log(error)
    });
    window.location.reload(false);
  }
  return (
    <h3 className='header' onClick={handleDeleteAccount}>Oturumu Kapat</h3>
  );
}
export default LogoutButton;