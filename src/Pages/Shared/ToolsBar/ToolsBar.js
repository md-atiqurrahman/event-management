import React from 'react';
import { BsArrowClockwise, BsLockFill, BsBoxArrowUp, BsBook } from "react-icons/bs";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";


const ToolsBar = () => {
    const goBack = () => {
        window.history.back();
    }

    const goForward = () =>{
        window.history.forward()
    }

    return (
        <div className='bg-[#f9f9f9f0] backdrop-blur-[10px] py-[8px] border-t  border-[#0000004d] lg:hidden'>
            <div className='flex justify-between items-center w-[331px] h-[44] rounded-[12px] bg-[#00000014] p-[15px] mx-[22px]'>
                <span className='text-black text-[19px]'>
                    <span className='text-[13px]'>A</span>A</span>
                <div className='flex'>
                    <span className='text-[15px]  leading-[17px] text-black opacity-[0.5] mr-[5px]'><BsLockFill
                    /></span>
                    <span className='font-normal text-[16px] leading-[19.09px] text-black'>domain.com</span>
                </div>
                <span className='text-[15px]  leading-[18px]'><BsArrowClockwise /></span>
            </div>
            <div className='mt-[16px] pb-[31px] mx-[22px] flex justify-between items-center'>
                <span onClick={goBack} className='text-[#2E7CF6]'><MdOutlineArrowBackIosNew /></span>
                <span onClick={goForward} className='text-[#CECECE]'>
                    <MdArrowForwardIos />
                </span>
                <span className='text-[#2E7CF6]'>
                    <BsBoxArrowUp />
                </span>
                <span className='text-[#2E7CF6]'>
                    <BsBook />
                </span>
                <span className='text-[#2E7CF6]'>
                    <TbBoxMultiple />
                </span>
            </div>
            <div className='w-[133px] h-[5px] rounded-[100px] bg-black text-center mx-auto'>

            </div>
        </div>
    );
};

export default ToolsBar;