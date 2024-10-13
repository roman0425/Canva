import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type DrawerProps = {
    children: React.ReactNode,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Drawer({
  children,
  isOpen,
  setIsOpen
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-30 inset-0 overflow-y-auto backdrop-contrast-50 flex"
      >
        <div className="flex h-full w-4/5">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className={`flex flex-col justify-between bg-white z-50
                          w-full max-w-sm p-4 overflow-hidden text-left
                          align-middle shadow-xl`}>
                  {children}
            </div>
          </Transition.Child>
        </div>
        <div className='w-1/5 h-full' onClick={()=>setIsOpen(false)} />
      </Dialog>
    </Transition>
  );
}