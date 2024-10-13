import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'

interface DropDownProps {
    menubutton: React.ReactNode
    menuitems: React.ReactNode[]
}

const DropDown =({menubutton, menuitems}: DropDownProps)=> {
  return (
    <Menu>
        <MenuButton>
            {menubutton}
        </MenuButton>

        <MenuItems
            transition
            anchor="bottom end"
            className="origin-top-right rounded-xl bg-white drop-shadow-lg p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            {
                menuitems.map((menuitem:React.ReactNode, index) => 
                    <MenuItem key={index}>
                        {menuitem}
                    </MenuItem>
                )
            }
        </MenuItems>
    </Menu>
  )
}

export default DropDown