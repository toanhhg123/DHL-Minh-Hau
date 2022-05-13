import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__container container">
                <h3>Liên hệ tư vấn</h3>
                <div className="contact__group">
                    <Link to={''} className="btn">
                        <i class="fa-solid fa-phone">:</i>
                        <span> {'  '} 0334782044</span>
                    </Link>
                    <Link to={''} className="btn">
                        <i class="fa-solid fa-phone">:</i>
                        <span> {'  '} 123123123</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
