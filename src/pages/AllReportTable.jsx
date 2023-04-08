import React, { useEffect, useState } from 'react';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllReportTable = () => {
  const [tablo, setTablo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}allreporttable.php`)
      .then((res) => setTablo(res.data));
  }, []);

  const filteredTablo = tablo.filter((user) =>
    user.bilgilerim_icerik.toLowerCase().includes(searchTerm.toLowerCase())
    
  );

  return (
    <div className='container-comment'>
      <main class='table'>
        <section class='table__header'>
          <h1>TÜM ŞİKAYETLER</h1>
          <div class='input-group'>
            <input
              type='search'
              placeholder='Search Data...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search />
          </div>
        </section>
        <section class='table__body'>
          <table>
            <thead>
              <tr>
                <th> bilgilerim_id </th>
                <th> bilgilerim_email </th>
                <th> bilgilerim_icerik </th>
                <th> bilgilerim_tarih </th>
                <th> bilgilerim_konubasligi </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {filteredTablo.map((user) => (
                <tr key={user.bilgilerim_id}>
                  <td>{user.bilgilerim_id}</td>
                  <td>{user.bilgilerim_email}</td>
                  <td> {user.bilgilerim_icerik} </td>
                  <td>{user.bilgilerim_tarih} </td>
                  <td>
                    <p class='status delivered'>{user.bilgilerim_konubasligi}</p>
                  </td>
                  <td>
                    <button
                      class='btn'
                      onClick={() => navigate(`/admin/sikayetler/${user.bilgilerim_id}`)}
                    >
                      Detay Gör
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AllReportTable;
