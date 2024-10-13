import Image from "next/image"
import { FC } from "react"

interface IconProps {
    name: string
    width?: number
    height?: number
    color?: string
    filled?: boolean
    className?: string
    onClick?:()=>void
}

const Icon:FC<IconProps> =({ name, width=38, height=38, filled, className, onClick }) => {

    return (
        <Image 
            src={filled ? `/icons/selected/${name}.svg` : `/icons/${name}.svg`}
            alt={`${name} icon`}
            width={width}
            height={height}
            onClick={onClick}
            className={className}
        />
    );
}

export default Icon;