import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai'

import { useStateContext } from '../../contexts/ContextProvider';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

// import avatar from './image/avatar.svg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title}
      position="BottomCenter"
    >
      <button type='button' 
        onClick={customFunc} 
        style={{ color }} 
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
          <span style={{ background: dotColor }}
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
          {icon}
        </button>
    </TooltipComponent>
  )

export const Navbar = () => {
    const { 
        activeMenu, 
        setActiveMenu, 
        isClicked, 
        setIsClicked, 
        handleClick, 
        screenSize, 
        setScreenSize, 
      } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <div className="flex gap-10">
        <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="white"
        icon={<AiOutlineMenu />} />
        <div className="flex flex-col">
            <h2 className='text-3xl'>Welcome, James!</h2>
            <p className='text-sm'>What are you going to do today?</p>
        </div>
        </div>
        <div className="flex gap-4">
            <NavButton
            title="Notification"
            dotColor='#9F34E1'
            customFunc={() => handleClick('notification')}
            color="white"
            icon={<RiNotification3Line />}
            />

            <TooltipComponent content='Profile'
            position='BottomCenter'  
            >
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userprofile')}>
                <div>
                    <p>James Bond</p>
                    <p className='text-xs text-gray-400'>Product Designer</p>
                </div>
                <img src="/image/avatar.svg" alt="avatar" className='rounded-full w-8 h-8' />
                <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
            </TooltipComponent>
        </div>
    </div>
  )
}
