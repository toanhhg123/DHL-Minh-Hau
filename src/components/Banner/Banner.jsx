import React from 'react';
import './Banner.scss';
import rightBaneer from '../../Access/banner-right.jpg';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__container container row">
                <div className="banner-left col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">
                    <h3>Thiên Long Phát EXPRESS</h3>
                    <h3>Chuyển phát nhanh quốc tế</h3>
                    <div className="banner-animation-text">
                        <div className="static-txt">Dịch Vụ</div>
                        <ul>
                            <li>Nhanh chóng</li>
                            <li>Chất Lượng</li>
                            <li>Tiết kiệm</li>
                        </ul>
                    </div>
                    <p className="banner-description">
                        Là một công ty đã thành lập hơn 6 năm kinh nghiệm trong
                        lĩnh vực vận chuyển hàng hóa quốc tế.{' '}
                        <span>Thiên Long Phát EXPRESS</span> là một trong những
                        công ty chuyển phát nhanh nhất Việt Nam. Luôn luôn với
                        mong muốn đem đến cho khách hàng sự hài lòng và tiết
                        kiệm nhất.
                    </p>
                    <div className="banner-buttons">
                        <a href="tel: 0334782044" className="">
                            {' '}
                            <i className="fa-solid fa-square-phone-flip"></i>{' '}
                            <span>Liên Hệ</span>{' '}
                        </a>
                        <a href="tel: 0334782044">
                            {' '}
                            <span>Tìm hiểu thêm</span>{' '}
                            <i className="fa-solid fa-angle-right"></i>{' '}
                        </a>
                    </div>
                </div>
                <div className="banner-right col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
                    <div className="banner__img__right">
                        <img src={rightBaneer} alt="" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
