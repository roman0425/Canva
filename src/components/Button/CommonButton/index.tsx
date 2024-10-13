import { Button } from '@headlessui/react'
import { cn } from "@/lib/utils";
import Icon from '@/components/Icons';

interface ButtonProps {
    icon?: string
    classes?: string
    label: string
    labelColor?: string
    onClick?: ()=>void
}

const CommonButton = ({ icon, classes, label, labelColor="text-white", onClick }: ButtonProps) => {
    return (
        <Button
            className={cn('rounded-lg h-10 py-2 px-8 text-sm flex items-center justify-center',classes)}
            onClick={onClick}            
        >
            {
                icon &&
                <Icon name={icon} width={24} height={24}/>
            }
            <span className={cn(labelColor,'ml-2 text-[14px] font-semibold')}>
                {label}
            </span>
        </Button>
    )
}

export default CommonButton
