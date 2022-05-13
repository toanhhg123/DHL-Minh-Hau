import React from 'react';
import { Link } from 'react-router-dom';

const NavPc = () => {
    return (
        <div className="head__nav">
            <ul className="nav-menu-pc d-flex align-items-center">
                <li>
                    <Link className="nav-link d-block" to={''}>
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to={''}>
                        Giới Thiệu
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to={'/service'}>
                        Dịch Vụ
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to="">
                        Track
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to="">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to="">
                        Bảng Giá
                    </Link>
                </li>
                <li>
                    <Link className="nav-link d-block" to="">
                        Đánh Giá
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavPc;
