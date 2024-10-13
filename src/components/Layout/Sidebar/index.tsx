'use client'

import { useEffect, useState } from "react"
import { IconButton, CommonButton as Button } from "@/components/Button";
import Icon from "@/components/Icons";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

const Sidebar =()=> {

    const [ selectedButton, setSelectButton ] = useState<number>(0);
    const [ showSidebar, setShowSidebar ] = useState<boolean>(true);

    const { isMobile, isTablet } = useIsMobile();

    const handleClickItems =(btn: number)=> {
        setSelectButton(btn);
        if(isTablet) setShowSidebar(!showSidebar);
    }

    useEffect(()=> {
        if(isTablet || !isTablet && !isMobile) {
            setShowSidebar(true)
        }
    }, [isTablet, isMobile])

    return (
        !isMobile &&
        <aside className={cn(isTablet && "absolute z-30", "flex left-0 shrink-0 flex-row bg-blue-50 h-full")}>
            <ul className="flex flex-col border-r border-gray-200 py-2">
                <IconButton icon="home" label="Home" selected={selectedButton == 0 ? true : false} onClick={()=>handleClickItems(0)}/>
                <IconButton icon="project" label="Project" selected={selectedButton == 1 ? true : false} onClick={()=>handleClickItems(1)}/>
                <IconButton icon="template" label="Templates" selected={selectedButton == 2 ? true : false} onClick={()=>handleClickItems(2)}/>
                <IconButton icon="brand" label="Brand" selected={selectedButton == 3 ? true : false} onClick={()=>handleClickItems(3)}/>
                <IconButton icon="app" label="Apps" selected={selectedButton == 4 ? true : false} onClick={()=>handleClickItems(4)}/>
            </ul>
            {
                showSidebar &&
                <div className={cn(isTablet && "border-r", "flex flex-col px-4 py-6")}>
                    <div className="flex flex-row justify-between items-center">
                        <Icon name="logo" width={80} height={30}/>
                        {
                            isTablet &&
                            <div className="p-1 border-gray-300 border rounded-lg" onClick={()=>setShowSidebar(false)}>
                                <Icon name="close" width={18} height={18}/>
                            </div>
                        }
                    </div>
                    <Button label="Create a design" icon="plus" classes="bg-blue-400 mt-4"/>
                    <Button label="Try Pro for 30 days" icon="crown" classes="bg-white mt-2" labelColor="text-black"/>
                    <p className="text-gray-500 font-semibold text-[12px] mt-4">Recent designs</p>
                </div>
            }
        </aside>
    )
}

export default Sidebar;