'use client'
import Avatar from "@/components/Avatar"
import Drawer from "@/components/Drawer"
import Icon from "@/components/Icons"
import SearchField from "@/components/SearchField"
import useIsMobile from "@/hooks/useIsMobile"
import { useState } from "react"
import { CommonButton as Button } from "@/components/Button"

const Navbar =()=> {

    const userInfo = {
        userId: "Roman0425",
        role: "Personal"
    }

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
                <div className="flex gap-4">
                    <Icon name="menu" className="drop-shadow-lg size-10 p-2 bg-white rounded-lg border" onClick={()=>setDrawerOpen(!drawerOpen)}/>
                    <SearchField />
                    <Drawer isOpen={drawerOpen} setIsOpen={setDrawerOpen}>
                        <div className="flex flex-col">
                            <div className="justify-between p-4 pt-6 border-b flex">
                                <span className="text-md font-semibold">Menu</span>
                                <Icon name="alert" width={24}/>
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <Icon name="avatar" className="size-14"/>
                                    </div>
                                    <div className="items-start flex flex-col">
                                        <span className="text-sm">{userInfo.userId}</span>
                                        <span className="text-xs">{userInfo.role}</span>
                                    </div>
                                </div>
                                <Icon name="arrowDown" className="size-4"/>
                            </div>
                            <Button icon="crown" label="Try Pro for 30 days" labelColor="text-black" classes="border m-4"/>
                        </div>
                    </Drawer>
                </div>
            }
        </>
    );
}

export default Navbar