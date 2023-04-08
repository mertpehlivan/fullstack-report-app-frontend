import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllReportTable from './pages/AllReportTable';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewReportsTable from './pages/NewReportsTable';
import ReportPanel from './pages/ReportPanel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ReturnReports from './pages/ReturnReports';
import ReportForm from './pages/reportform/ReportForm';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}session-check.php`, { withCredentials: true });
        setAuthenticated(response.data.success);
        setLoading(false);
      } catch (error) {
        // Hata işleme işlemleri burada yapılabilir.
        console.log(error);
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
      {authenticated && <Sidebar />}
      <div className='leftbox'>
        {authenticated && <Navbar />}
        <Routes >
          <Route path='/' element={<ReportForm/>} />
          <Route exact path='/admin' element={authenticated ? <Dashboard /> : <Navigate to={'/login'} />} />
          <Route exact path='/admin/tumsikayetler' element={authenticated ? <AllReportTable /> : <Navigate to={'/login'} />} />
          <Route exact path='/admin/yenisikayetler' element={authenticated ? <NewReportsTable /> : <Navigate to={'/login'} />} />
          <Route exact path='/admin/donusbekleyen' element={authenticated ? <ReturnReports /> : <Navigate to={'/login'} />} />
          <Route exact path='/admin/sikayetler/:id'  element={authenticated ? <ReportPanel/> : <Navigate to={'/login'} />}  />
          <Route exact path='/admin/mail/:id'  element={authenticated ? <ReportPanel/> : <Navigate to={'/login'} />}  />
          <Route exact path='/login' element={authenticated ? <Navigate to={'/admin'} /> : <Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
