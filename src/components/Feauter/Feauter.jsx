import React from 'react';
import './Feauter.scss';
import feauter1 from '../../Access/feauter1.png';
import { Link } from 'react-router-dom';

const Feauter = () => {
    return (
        <React.Fragment>
            <div className="feauter">
                <div className="feauter__Container container">
                    <div
                        className="row"
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <div className="col-12 col-lg-6">
                            <div className="feauter__content">
                                <h3>Gửi hàng đi Mỹ</h3>
                                <p>
                                    Hoa Kỳ là một quốc gia đa văn hóa, đa chủng
                                    tộc, là quốc gia của những người nhập cư.
                                    Bạn sẽ gặp bất cứ văn hóa nào ở đất nước
                                    này. Tuy là quốc gia có nguồn gốc là dân
                                    nhập cư nhưng nước Mỹ vẫn có rất nhiều nét
                                    đặc trưng riêng của mình.
                                </p>
                                <Link to={''} className="btn btn-br-w">
                                    <span>Xem thêm</span>
                                    <i class="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="feauter__img">
                                <img src={feauter1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feauter">
                <div className="feauter__Container container">
                    <div
                        className="row"
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <div className="col-12 col-lg-6">
                            <div className="feauter__content">
                                <h3>Gửi hàng đi Mỹ</h3>
                                <p>
                                    Hoa Kỳ là một quốc gia đa văn hóa, đa chủng
                                    tộc, là quốc gia của những người nhập cư.
                                    Bạn sẽ gặp bất cứ văn hóa nào ở đất nước
                                    này. Tuy là quốc gia có nguồn gốc là dân
                                    nhập cư nhưng nước Mỹ vẫn có rất nhiều nét
                                    đặc trưng riêng của mình.
                                </p>
                                <Link to={''} className="btn btn-br-w">
                                    <span>Xem thêm</span>
                                    <i class="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="feauter__img">
                                <img src={feauter1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Feauter;
