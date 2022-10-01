import React from 'react';
import { IoIosWifi } from "react-icons/io";
import { BsBatteryFull, BsFillBarChartFill } from "react-icons/bs";
import card from '../../../assets/Home/Landing page image.svg';
import './Home.css';

const Home = () => {
    return (
        <div className='bg-[#F6F2FF]'>
            <header className='flex justify-between items-center mx-[32px]'>
                <div className='w-[29px] h-[21px] mt-[13px]'>
                    <h3 className='font-normal text-[15px] leading-[21px] text-[#020202]'>9:41</h3>
                </div>
                <div className='mt-[13px] flex gap-[5px]'>
                    <h3 className='w-[15px] h-[5px] text-[#020202]'><BsFillBarChartFill /></h3>
                    <h3 className='w-[15px] h-[11px] text-[#020202]'><IoIosWifi /></h3>
                    <h3 className='w-[15px] h-[11px] text-[#020202]'><BsBatteryFull /></h3>
                </div>
            </header>
            <main>
                <section className='text-center mt-[94px] mx-[70px] mb-[16px]'>
                    <h1 className='font-bold text-[36px] leading-[36px] text-[#240D57]'>Imagine if <span className='bg-gradient-to-r from-[#8456EC]
                to-[#E87BF8] bg-clip-text text-transparent'>Snapchat</span> had events.</h1>
                </section>
                <section className='mx-[27px] text-center mb-[36px]'>
                    <h2 className='font-light text-[16px] leading-[18px]
                 text-[#4F4F4F]'>Easily host and share events with your friends across any social media.</h2>
                </section>
                <section className='mx-[105px] mb-[34px]'>
                    <img src={card} className='w-[165px] h-[292px]' alt="" />
                </section>
                <section className=' mx-[94px] pb-[13px]'>
                    <div className='flex justify-center items-center w-[187px] h-[50px] padding-[16px] rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-center '>
                        <h3 className='btn-text font-bold text-[16px] leading-[18.4px] text-white'>Create my event</h3>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;