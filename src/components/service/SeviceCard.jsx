import React from 'react';
import './Sevice.scss';
import sv_1 from '../../Access/sv_1.png';
const SeviceCard = () => {
    return (
        <div className="sv__card">
            <div className="sv__img">
                <img src={sv_1} alt="" />
            </div>

            <div className="sv__content">Gửi hàng đi Mỹ</div>
        </div>
    );
};

export default SeviceCard;
