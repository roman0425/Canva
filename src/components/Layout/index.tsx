'use client'
import { FC } from "react"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> =({children}) => {

    const { isMobile, isTablet } = useIsMobile();

    return (
        <div className="flex bg-blue-50 h-full">
            <Sidebar/>
            <div 
                className={cn('w-full m-2 py-2 px-4 rounded-2xl shadow-lg bg-white',
                    isTablet && "m-0 rounded-none ml-[70px]",
                    isMobile && "m-0 rounded-none"
                )}
            >
                <Navbar />
                <div className= "rounded-lg">
                    {children}
                </div>
                {
                    isMobile &&
                    <MobileNavbar />
                }
            </div>
        </div>
    );
}

export default Layout;