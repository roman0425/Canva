import Icon from "@/components/Icons";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";

interface IconButtonProps {
    selected: boolean
    label: string
    icon: string
    onClick: ()=> void
}

const IconButton = ({ selected, label, icon, onClick }: IconButtonProps) => {

    const { isMobile } = useIsMobile();

    return (
        <div className="flex flex-col items-center justify-center p-2" onClick={onClick}>
            <Icon name={icon} filled={selected} className={cn("p-1 rounded-lg", !isMobile && selected ? "bg-blue-100" : "bg-none")}/>
            <span className={cn(isMobile && "-mt-2", "text-blue-400 text-[11px]")}>{label}</span>
        </div>
    );
}

export default IconButton