import React from 'react';
import { IoIosWifi } from "react-icons/io";
import { BsBatteryFull, BsFillBarChartFill } from "react-icons/bs";
import card from '../../../assets/Home/Landing page image.svg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header className='lg:hidden flex justify-between items-center mx-[32px]'>
                <div className='w-[29px] h-[21px] mt-[13px]'>
                    <span className='font-normal text-[15px] leading-[21px] text-[#020202]'>9:41</span>
                </div>
                <div className='mt-[11px] flex gap-[5px]'>
                    <span className='text-[15px]  leading-[11px] text-[#020202] -mt-[2px]'><BsFillBarChartFill /></span>
                    <span className='text-[15px] leading-[11px] text-[#020202]'><IoIosWifi /></span>
                    <span className='text-[15px] leading-[11px] text-[#020202]'><BsBatteryFull /></span>
                </div>
            </header>
            <main>
                <div className='lg:flex lg:flex-row-reverse lg:justify-center lg:items-start lg:py-[50px]'>
                    <div className='lg:w-[37%] lg:ml-[80px] lg:flex lg:flex-col lg:items-end'>
                        <div className='lg:w-[75%] text-center lg:text-right mt-[94px] mx-[70px] lg:mx-0 mb-[16px]'>
                            <h1 className='font-bold text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#240D57]'>Imagine if <span className='bg-gradient-to-r from-[#8456EC]
                           to-[#E87BF8] bg-clip-text text-transparent'>Snapchat</span> had events.</h1>
                        </div>
                        <div className='mx-[27px] lg:mx-0 text-center  lg:text-right mb-[36px]'>
                            <h2 className='font-light text-[16px] lg:text-[24px] leading-[18px] lg:leading-[27px]
                             text-[#4F4F4F]'>Easily host and share events with your friends across any social media.</h2>
                        </div>
                        <div className='hidden lg:flex'>
                            <Link to='/addEventDetails'>
                                <div className='flex justify-center items-center w-[320px] h-[55px] padding-[16px] rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-center '>
                                    <span className='btn-text font-bold text-[16px] leading-[18.4px] text-white'>Create my event</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='mx-[105px] lg:mx-[0] mb-[34px] lg:mb-[0]'>
                        <img src={card} className='sm:max-w-sm lg:max-w-md' alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center lg:hidden mx-[94px] pb-[13px]'>
                    <Link to='/addEventDetails'>
                        <div className='flex justify-center items-center w-[187px] h-[50px] padding-[16px] rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-center '>
                            <span className='btn-text font-bold text-[16px] leading-[18.4px] text-white'>Create my event</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;