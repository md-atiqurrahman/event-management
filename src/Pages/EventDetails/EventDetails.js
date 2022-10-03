import React from 'react';
import eventPhoto from '../../assets/EventDetails/Birthday cake.png';
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdArrowForwardIos } from 'react-icons/md';

const EventDetails = () => {
    return (
        <div className='lg:flex lg:flex-row-reverse lg:justify-center lg:items-start lg:gap-[94px] lg:py-[100px]'>
            <img className='w-full h-full lg:w-[500px] lg:h-[500px] pb-[11px] lg:pb-0' src={eventPhoto} alt="" />
            <div className='mx-[20px] lg:mx-0 lg:w-[450px] lg:h-[450px]'>
                <h1 className='text-[#240D57] text-[28px] lg:text-[48px] leading-[32.2px] lg:leading-[55.2px] font-bold pb-[4px] lg:pb-[17px]'>Birthday Bash</h1>
                <h3 className='text-[#828282] text-[14px] lg:text-[18px] leading-[16.1px] lg:leading-[20.7px] font-normal pb-[32px] lg:pb-[65px]'>Hosted by <strong>Elysia</strong></h3>
                <div className='flex justify-between items-center pb-[16px] lg:pb-[47px]'>
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center w-[48px] lg:w-[56px] h-[48px] lg:h-[56px] rounded-[10px] p-[12px] bg-white shadow-sm'>
                            <span className='text-[#8456EC] text-[19px] lg:text-[26px] leading-[20px] lg:leading-[26.56px]'>
                                <TbCalendarEvent />
                            </span>
                        </div>
                        <div className='ml-[20px]'>
                            <h3 className='text-[#240D57] text-[16px] lg:text-[18px] leading-[18.4px] lg:leading-[20.7px] font-bold pb-[3px]'>18 August 6:00PM</h3>
                            <h4 className='text-[#4F4F4F] text-[14px] lg:text-[18px] leading-[16.1px] lg:leading-[20.7px] font-normal'>to <strong>19 August 1:00PM</strong> UTC +10</h4>
                        </div>
                    </div>
                    <div>
                        <span className='text-[#CECECE]'>
                            <MdArrowForwardIos />
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center pb-[16px] lg:pb-0'>
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center w-[48px] lg:w-[56px] h-[48px] lg:h-[56px] rounded-[10px] p-[12px] bg-white shadow-sm'>
                            <span className='text-[#8456EC] text-[19px] lg:text-[22px] leading-[20px] lg:leading-[26px]'>
                                <HiOutlineLocationMarker/>
                            </span>
                        </div>
                        <div className='ml-[20px]'>
                            <h3 className='text-[#240D57] text-[16px] lg:text-[18px] leading-[18.4px] lg:leading-[20.7px] font-bold pb-[3px]'>Street name</h3>
                            <h4 className='text-[#4F4F4F] text-[14px] lg:text-[18px] leading-[16.1px] lg:leading-[20.7px] font-normal'>Suburb, State, Postcode</h4>
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