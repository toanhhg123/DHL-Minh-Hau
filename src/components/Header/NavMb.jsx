import React from 'react';
import { Link } from 'react-router-dom';

const NavMb = ({ setNavMb }) => {
    return (
        <div className="nav-mobile">
            <ul>
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                        <span>Trang Chủ</span>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <i className="fa-solid fa-info-circle"></i>
                        <span>Giới Thiệu</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service">
                        <i className="fa-solid fa-plane-circle-check"></i>
                        <span>Dịch Vụ</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-plane-departure"></i>
                        <span>Track</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <i className="fa-solid fa-blog"></i>
                        <span>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <span>Bảng Giá</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <i className="fa-solid fa-star"></i>
                        <span>Đánh Giá</span>
                    </Link>
                </li>
            </ul>
            <div className="icon-close-mobile" onClick={() => setNavMb(false)}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    );
};

export default NavMb;
