import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { links, linkSettings } from '../../config/const';
import { useStateContext } from '../../contexts/ContextProvider';
import { signOut } from 'next-auth/react';
import { AiOutlineLogout } from 'react-icons/ai';

const Sidebar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const [isActive, setIsActive] = useState(true)

    const handleCloseSidebar = () => {
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }

    const handleSignOut = async (e) => {
        await signOut({callbackUrl: '/' })
      }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 hover:bg-[#9F34E1]';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                <div className='flex justify-between items-center px-4'>
                    <Link href='/test' onClick={handleCloseSidebar} className='items-center gap-3 ml-3 pt-20 flex font-extrabold tracking-tight text-slate-900'>
                        <a className='text-[2rem] font-bold mt-4'>
                            WiKi
                        </a>
                    </Link>
                    <TooltipComponent content="Menu" position="CenterCenter">
                        <button type='button'
                            onClick={() => setActiveMenu((prev) => !prev)}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
                        >
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className="mt-10">
                    <div>
                        {links.map((item, i) => (
                            <div key={i}>
                                <Link href="#" 
                                    onClick={handleCloseSidebar}
                                    className={activeLink}
                                >
                                    <a className={activeLink}>
                                        {item.icon}
                                        <span className='capitalize'>
                                            {item.title}
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="w-[180px] flex mx-auto my-10">
                        <div className="h-[1px] bg-gray-600 w-full"></div>
                    </div>
                    <div>
                        {linkSettings.map((item, i) => (
                            <div key={i}>
                                <Link href="#"
                                    onClick={handleCloseSidebar}
                                    className={activeLink}
                                >
                                    <a className={activeLink}>
                                        {item.icon}
                                        <span className='capitalize'>
                                            {item.title}
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        ))}
                        <div>
                            <a className={activeLink + ' cursor-pointer'} onClick={handleSignOut}>
                                <AiOutlineLogout />
                                <span className='capitalize'>
                                    Sign Out
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* {links.map((item) => (
                    <div key={item.title}>
                        <p className="text-gray-400 m-3 mt-4 uppercase">
                        {item.title}
                        </p>
                        {item.links.map((link) => (
                        <NavLink to={`/${link.name}`}
                            key={link.name}
                            onClick={handleCloseSidebar}
                            className={({ isActive }) => 
                            isActive ? activeLink : normalLink
                            }
                        >
                            {link.icon}
                            <span className='capitalize'>
                            {link.name}
                            </span>
                        </NavLink>
                        ))}
                    </div>
                    ))} */}
                </div>
                </>
            )}
        </div>
    )
}

export default Sidebar