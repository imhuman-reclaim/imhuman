import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { FC } from 'react'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {

    // return (
    //     <SplashScreen/>
    // )
    return (
        <div className=' max-w-sm mx-auto min-h-screen' >
            <div className="p-4">
                <ConnectButton showBalance={false} chainStatus={'icon'}  />
            </div>
            <div className=" p-[18px] mb-52    ">
                {children}
            </div>
            <img src="/petalsBgAlt.svg" className='absolute object-contain bottom-0' alt="" />
        </div>
    )
}

export default DashboardLayout;