import React from 'react';
import eventPhoto from '../../assets/EventDetails/Birthday cake.png';
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdArrowForwardIos } from 'react-icons/md';

const EventDetails = () => {
    return (
        <div className='bg-[#F6F2FF]'>
            <img className='w-[375px] h-[375px] pb-[11px]' src={eventPhoto} alt="" />
            <div className='mx-[20px]'>
                <h1 className='text-[#240D57] text-[28px] leading-[32.2px] font-bold pb-[4px]'>Birthday Bash</h1>
                <h3 className='text-[#828282] text-[14px] leading-[16.1px] font-normal pb-[32px]'>Hosted by <strong>Elysia</strong></h3>
                <div className='flex justify-between items-center pb-[16px]'>
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center w-[48px] h-[48px] rounded-[10px] p-[12px] bg-white shadow-sm'>
                            <span className='text-[#8456EC] text-[19px] leading-[20px]'>
                                <TbCalendarEvent />
                            </span>
                        </div>
                        <div className='ml-[20px]'>
                            <h3 className='text-[#240D57] text-[16px] leading-[18.4px] font-bold pb-[3px]'>18 August 6:00PM</h3>
                            <h4 className='text-[#4F4F4F] text-[14px] leading-[16.1px] font-normal'>to <strong>19 August 1:00PM</strong> UTC +10</h4>
                        </div>
                    </div>
                    <div>
                        <span className='text-[#CECECE]'>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center pb-[16px]'>
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center w-[48px] h-[48px] rounded-[10px] p-[12px] bg-white shadow-sm'>
                            <span className='text-[#8456EC] text-[19px] leading-[20px]'>
                                <HiOutlineLocationMarker/>
                            </span>
                        </div>
                        <div className='ml-[20px]'>
                            <h3 className='text-[#240D57] text-[16px] leading-[18.4px] font-bold pb-[3px]'>Street name</h3>
                            <h4 className='text-[#4F4F4F] text-[14px] leading-[16.1px] font-normal'>Suburb, State, Postcode</h4>
                        </div>
                    </div>
                    <div>
                        <span className='text-[#CECECE]'>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;