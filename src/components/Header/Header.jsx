import React, { useState } from 'react';
import './Header.css';
import Logo from '../../Access/LOGO.png';
import { Link } from 'react-router-dom';
import NavPc from './NavPc';
import NavMb from './NavMb';

const Header = () => {
    const [navMB, setNavMb] = useState(false);
    return (
        <header className="fixed-top">
            <div className="head container d-flex justify-content-between align-items-center">
                <div className="head__logo">
                    <Link to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <NavPc />
                <div className="head__contact">
                    <a href="tel:033478204" className="btn btn-primary">
                        <i className="fa-solid fa-phone"></i>
                        <span>: 0334782044</span>
                    </a>
                </div>
                <div
                    className="menu__iconLogo"
                    onClick={() => setNavMb(!navMB)}
                >
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            {navMB && <NavMb setNavMb={setNavMb} />}
        </header>
    );
};

export default Header;
