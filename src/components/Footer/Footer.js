import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=' bg-dark mt-5 border-top border-4 border-primary'>
                <div className='text-primary text-center p-3'>
                <h1>This is the best course ever</h1>
                <h3>Most of the ratings and comment are positive.</h3>
                <h4>If you feel good to comment, Please comment in below.</h4>
                <input className="p-2 px-5 border border-2 border-primary rounded" type="email" name="" id="" placeholder="Enter Your Email."/>
                <br />
                <input className="mt-2 p-2 px-3 border border-2 border-primary rounded" type="password" name="" id="" placeholder="PassWord.." />
                <br />
                <button className='ms-1 mt-1 p-2 border border-2 border-primary rounded' type="submit">Submit</button>
                <h5 className='text-white mt-2'>© All Copyrights reserved by Ali 2020-2021.</h5>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;