import React from 'react';
import Header from '../Header/Header';
import SeviceCards from './SeviceCards';
import './Sevice.scss';

const Sevice = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="sevice">
                <div className="sevice__container container">
                    <h2>Dịch vụ gửi hàng quốc tế</h2>
                    <p>
                        Dịch vụ chuyển phát nhanh quốc tế của Gateway Express
                        giúp gửi hàng hóa, tài liệu tới 220 quốc gia và vùng
                        lãnh thổ trên thế giới với cước phí tiết kiệm nhất.
                    </p>

                    <SeviceCards />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sevice;
