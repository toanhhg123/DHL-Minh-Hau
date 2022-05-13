import React from 'react';
import cardEx1 from '../../Access/cardEx1.png';
import './CardExpress.scss';
const CardExpress = () => {
    return (
        <div className="cardEx">
            <div className="cardEx__container container">
                <div className="row">
                    <div className="col-6 col-lg-4 col-xl-3">
                        <div className="cardEx__item">
                            <div className="cardEx__item-img">
                                <img src={cardEx1} alt="" />
                            </div>
                            <h4>Gửi hàng đi mỹ</h4>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3">
                        <div className="cardEx__item">
                            <div className="cardEx__item-img">
                                <img src={cardEx1} alt="" />
                            </div>
                            <h4>Gửi hàng đi mỹ</h4>
                        </div>
                    </div>

                    <div className="col-6 col-lg-4 col-xl-3">
                        <div className="cardEx__item">
                            <div className="cardEx__item-img">
                                <img src={cardEx1} alt="" />
                            </div>
                            <h4>Gửi hàng đi mỹ</h4>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3">
                        <div className="cardEx__item">
                            <div className="cardEx__item-img">
                                <img src={cardEx1} alt="" />
                            </div>
                            <h4>Gửi hàng đi mỹ</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardExpress;
