'use client'

import { useState } from "react";
import Icon from "@/components/Icons";
import { IconButton } from "@/components/Button";

const MobileNavbar = () => {

    const [ selectedButton, setSelectButton ] = useState<number>(0);

    return (
        <div className="bottom-2 fixed left-0 w-full border-t">
            <div className="relative w-full h-12">
                <div className="flex w-full justify-between px-6 items-center">
                    <IconButton icon="home" label="Home" selected={selectedButton == 0 ? true : false} onClick={()=>setSelectButton(0)}/>
                    <IconButton icon="project" label="Project" selected={selectedButton == 1 ? true : false} onClick={()=>setSelectButton(1)}/>
                    <div className="flex w-10 h-10 cursor-pointer justify-center bg-blue-600 rounded-full items-center">
                        <Icon name="plus" className="text-white size-6"/>
                    </div>
                    <IconButton icon="template" label="Templates" selected={selectedButton == 3 ? true : false} onClick={()=>setSelectButton(3)}/>
                    <IconButton icon="probadge" label="Pro" selected={selectedButton == 4 ? true : false} onClick={()=>setSelectButton(4)}/>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;