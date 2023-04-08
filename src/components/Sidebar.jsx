import React, { useState } from 'react';
import { Menu, Dashboard, Comment, Inventory, DomainVerification, Clear } from '@mui/icons-material';
import '../App.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon: <Dashboard fontSize='large' />,
    },
    {
      path: '/admin/tumsikayetler',
      name: 'Tüm Şikayetler',
      icon: <Inventory fontSize='large' />,
    },
    {
      path: '/admin/yenisikayetler',
      name: 'Yeni Gelen Şikayetler',
      icon: <Comment fontSize='large' />,
    },
    {
      path: '/admin/donusbekleyen',
      name: 'Geri Dönüş Bekleyenler',
      icon: <DomainVerification fontSize='large' />,
    },
  ];

  return (
    <div className='container'>
      <div style={{ width: isOpen ? "auto" : "65px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "30px" : "auto" }} className="bars">
            {!isOpen ? <Menu fontSize='large' onClick={toggle} /> : <Clear onClick={toggle} />}
          </div>
        </div>
        {
          menuItems.map((item, index) => (
            <a
              style={{ marginRight: isOpen ? "0px" : "auto", width: isOpen ? "300px" : "auto" }}
              href={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div style={{ margin: isOpen ? "0px" : "auto" }} className="icon">{item.icon}</div>
              <div style={{ marginLeft: isOpen ? "0px" : "20px", display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </a>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
