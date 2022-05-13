import React from 'react';
import SeviceCard from './SeviceCard';

import sv_1 from '../../Access/sv_1.png';

const datas = [
    {
        title: 'Gửi hàng đi mĩ',
        img: sv_1,
    },
    {
        title: 'Gửi hàng đi Nhật',
        img: sv_1,
    },
    {
        title: 'Gửi hàng đi tokio',
        img: sv_1,
    },
    {
        title: 'Gửi hàng đi Úc',
        img: sv_1,
    },
    {
        title: 'Gửi hàng đi Cânda',
        img: sv_1,
    },
];

const SeviceCards = (props) => {
    return (
        <div className="sevice__cards">
            <div className="row">
                {datas.map((data, i) => (
                    <div className="col-6 col-sm-4 col-lg-3" key={i}>
                        <SeviceCard img={data.img} title={data.img} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeviceCards;
