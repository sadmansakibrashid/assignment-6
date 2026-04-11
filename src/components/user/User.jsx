import React from 'react';

const User = () => {
    return (
        <div className='w-full h-[245px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-around'>
            <div className='flex gap-16 text-center'>
    <div>
        <h2 className='text-[#FFFFFF] font-bold text-3xl'>50K+</h2>
        <p className='text-[#FFFFFF]'>Active Users</p>
    </div>
    <div>
        <h2 className='text-[#FFFFFF] font-bold text-3xl'>200+</h2>
        <p className='text-[#FFFFFF]'>Premium Tools</p>
    </div>
    <div>
        <h2 className='text-[#FFFFFF] font-bold text-3xl'>4.9</h2>
        <p className='text-[#FFFFFF]'>Rating</p>
    </div>
</div>
        </div>
    );
};

export default User;