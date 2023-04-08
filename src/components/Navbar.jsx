import React from 'react';
import {AccountCircle,ArrowDropDown,Logout,Settings} from '@mui/icons-material';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    
    return (
        <div className='navbar'>
            <div className="userbox">
                <div className='user'>
                    <AccountCircle/>
                    <h3 className='header'>Şaban Mert Pehlivan</h3>
                    <ArrowDropDown/>
                </div>
                <div className='user'>
                    <Settings/>
                    <h3 className='header'>Ayarlar</h3>
                </div>
                <div className='user'>
                    <Logout/>
                    <LogoutButton/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
