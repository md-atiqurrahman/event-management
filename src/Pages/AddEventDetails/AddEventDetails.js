import React from 'react';
import { Link } from 'react-router-dom';

const AddEventDetails = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:py-[30px]'>
            <div className="min-h-min card flex-shrink-0 w-full max-w-sm lg:max-w-lg lg:shadow-2xl">
                <div className="card-body">
                    <h1 className='text-[#240D57] text-center text-[28px] leading-[32px] font-semibold'>Add Event Details</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">Event name</span>
                        </label>
                        <input type="text" placeholder="Enter event name..." className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">Host name</span>
                        </label>
                        <input type="text" placeholder="Enter host name..." className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">Start date</span>
                        </label>
                        <input type="text" placeholder="dd-mm-yyyy" className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">End date</span>
                        </label>
                        <input type="text" placeholder="dd-mm-yyyy" className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">Location</span>
                        </label>
                        <input type="text" placeholder="House no,Street address,City,Country" className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#240D57]">Event photo</span>
                        </label>
                        <input type="text" placeholder="Enter event photo..." className="input border-[#E87BF8] rounded-[10px] focus:border-[#E87BF8] bg-transparent" />
                    </div>
                    <div className="mt-6">
                        <Link to='/eventDetails'>
                            <div className='flex justify-center items-center w-[187px] h-[50px] padding-[16px] mx-auto rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-center '>
                                <span className='font-bold text-[16px] leading-[18.4px] text-white uppercase'>Next</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default AddEventDetails;