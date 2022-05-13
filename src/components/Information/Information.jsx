import React from 'react';
import './Information.scss';
import info1 from '../../Access/info-1.svg';
import info2 from '../../Access/info-2.svg';
import info3 from '../../Access/info-3.svg';
import info4 from '../../Access/info-4.svg';

const Information = () => {
    return (
        <div className="info">
            <div className="info__container container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="info-item">
                            <img src={info1} alt="" />
                            <h5>Giá cước cạnh tranh</h5>
                            <p>
                                Là đối tác lớn của các hãng vận chuyển quốc tế,
                                giúp quý khách hàng có được mức giá tốt nhất.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="info-item">
                            <img src={info2} alt="" />
                            <h5>Giá cước cạnh tranh</h5>
                            <p>
                                Là đối tác lớn của các hãng vận chuyển quốc tế,
                                giúp quý khách hàng có được mức giá tốt nhất.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="info-item">
                            <img src={info3} alt="" />
                            <h5>Giá cước cạnh tranh</h5>
                            <p>
                                Là đối tác lớn của các hãng vận chuyển quốc tế,
                                giúp quý khách hàng có được mức giá tốt nhất.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="info-item">
                            <img src={info4} alt="" />
                            <h5>Giá cước cạnh tranh</h5>
                            <p>
                                Là đối tác lớn của các hãng vận chuyển quốc tế,
                                giúp quý khách hàng có được mức giá tốt nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
