import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    const { activeMenu } = useStateContext();

  return (
    <div className='h-screen flex flex-row justify-start'>
        {activeMenu ? (
            <div className='w-72 fixed sidebar bg-[#23212B]'>
                <Sidebar />
            </div>
        ) : (
            <div className='w-0'>
                <Sidebar />
            </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
            </div>
            
            {activeMenu ? (
                <div className="flex-1 p-4 text-white">
                    {children}
                </div>
            ) : (
                <div className="flex-1 p-4 text-white">
                    {children}
                </div>
            )}
        </div>
        
    </div>
  )
}

export default Layout