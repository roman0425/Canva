'use client'
import Avatar from "@/components/Avatar"
import Drawer from "@/components/Drawer"
import Icon from "@/components/Icons"
import SearchField from "@/components/SearchField"
import useIsMobile from "@/hooks/useIsMobile"
import { useState } from "react"

const Navbar =()=> {

    const { isMobile } = useIsMobile();
    const [ drawerOpen, setDrawerOpen ] = useState<boolean>(false)

    return (
        <>
            {
                !isMobile ?
                <div className="grid items-center gap-6 xl:grid-cols-3 grid-cols-2">
                    <SearchField className="mx-auto col-start-1 xl:col-start-2 col-end-2"/>
                    <div className="flex justify-end gap-4 items-center">
                        <Icon name="setting" className="size-6"/>
                        <Icon name="alert" className="size-6"/>
                        <Avatar />
                    </div>
                </div>
                :
                <div className="p-4 flex gap-4">
                    <Icon name="menu" className="drop-shadow-lg size-10 p-2 bg-white rounded-lg border" onClick={()=>setDrawerOpen(!drawerOpen)}/>
                    <SearchField />
                    <Drawer isOpen={drawerOpen} setIsOpen={setDrawerOpen}>
                        <div className="justify-between p-2 border-b flex">
                            <span className="text-md font-semibold">Menu</span>
                            <Icon name="alert" width={24}/>
                        </div>
                    </Drawer>
                </div>
            }
        </>
    );
}

export default Navbar