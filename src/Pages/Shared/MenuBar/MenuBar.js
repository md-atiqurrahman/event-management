import React from 'react';
import { BsArrowClockwise, BsLockFill} from "react-icons/bs";


const MenuBar = () => {
    return (
        <div className='bg-[#f9f9f9f0] backdrop-blur-[10px] pt-[8px] border-t 
        border-[#0000004d]'>
            <div className='flex justify-between w-[331px] h-[44] rounded-[12px] bg-[#00000014] p-[15px] mx-[22px]'>
                <h3 className='text-black w-[19px] h-[12px]'>aA</h3>
                <div className='flex'>
                    <h3 className='text-[#737373] mr-[5px]'><BsLockFill 
                    className='w-[15px] h-[17px]'/></h3>
                    <h3 className='font-normal text-[16px] leading-[19.09px] text-black'>domain.com</h3>
                </div>
                <h3><BsArrowClockwise className='w-[15px] h-[18px]' /></h3>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default MenuBar;