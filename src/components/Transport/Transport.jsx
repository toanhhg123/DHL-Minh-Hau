import React from 'react';
import './Transport.scss';
import dhlTran from '../../Access/dhl-tran.png';
import fexTran from '../../Access/fex-tran.png';
import tntTran from '../../Access/tnt-tran.png';
import upsTran from '../../Access/ups-tran.png';

const Transport = () => {
    return (
        <div className="transport">
            <div className="transport__container container row">
                <div className="transport__blog-img col-6 col-sm-6 col-md-6 col-lg-3">
                    <img src={dhlTran} alt="" />
                </div>
                <div className="transport__blog-img col-6 col-sm-6 col-md-6 col-lg-3">
                    <img src={fexTran} alt="" />
                </div>
                <div className="transport__blog-img col-6 col-sm-6 col-md-6 col-lg-3">
                    <img src={tntTran} alt="" />
                </div>
                <div className="transport__blog-img col-6 col-sm-6 col-md-6 col-lg-3">
                    <img src={upsTran} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Transport;
