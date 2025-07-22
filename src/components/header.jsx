import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../style/Header.css';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setDrawerOpen(false);
    navigate('/profile');
  };

  const navLinks = (
    <ul className="navbar-links">
      <li>
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/categories" className={location.pathname === '/categories' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>
          Categories
        </Link>
      </li>
      <li>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setDrawerOpen(false)}>
          Contact
        </Link>
      </li>
      <li className="user-menu" onClick={handleProfileClick} style={{cursor:'pointer'}}>
        <span className="profile-desktop"><FaUserCircle size={26} /></span>
      </li>
    </ul>
  );

  return (
    <header className="navbar">
      <div className="appname">
        <Link to="/home" style={{ fontSize: 32, fontWeight: 'bold', letterSpacing: 2 }}>RecipeHunt</Link>
      </div>
      <div className="navbar-links-desktop">{navLinks}</div>
      <div className="hamburger-mobile" onClick={() => setDrawerOpen(true)}>
        <MenuOutlined style={{ fontSize: 28, color: '#fff' }} />
      </div>
      <Drawer
        title={<Link to="/home" onClick={() => setDrawerOpen(false)} style={{ color: '#ff6600', fontWeight: 'bold', fontSize: 22 }}>RecipeHunt</Link>}
        placement="left"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        bodyStyle={{ padding: 0, background: '#fff7f0' }}
        width={260}
        className="mobile-drawer"
      >
        {navLinks}
      </Drawer>
    </header>
  );
};

export default Header;
