import React from 'react';
import './FeedBack.scss';
import feedback1 from '../../Access/feedback1.png';
const FeedBack = () => {
    return (
        <div className="feedback">
            <div className="feedback__container container">
                <h3>Khách hàng phản hồi</h3>
                <p>
                    húng tôi luôn nỗ lực không ngừng trong việc nâng cao chất
                    lượng dịch vụ và những giải pháp chuyển phát nhanh ưu việt
                    nhất, đáp ứng ngày càng đa dạng các nhu cầu chuyển phát của
                    khách hàng từ cá nhân đến doanh nghiệp. Sự hài lòng về dịch
                    vụ luôn là yếu tố được quan tâm hàng đầu tại Gateway
                    Express.
                </p>
                <div className="feedback-imgs row">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="feedback-img">
                            <img src={feedback1} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="feedback-img">
                            <img src={feedback1} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="feedback-img">
                            <img src={feedback1} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="feedback-img">
                            <img src={feedback1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
