import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface IProps {
    name: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    href: string
    active: boolean
}

const DashboardTab: React.FC<IProps> = ({ name, Icon, href, active }) => {
    return (
        <Link href={href} className="flex-1">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <Icon
                    className={cn(
                        `size-5`,
                        active ? "fill-secondary-foreground" : "fill-gray-500"
                    )}
                />
                <h1
                    className={cn(
                        "text-xs",
                        active ? "text-secondary-foreground" : "text-gray-500"
                    )}
                >
                    {name}
                </h1>
            </div>
        </Link>
    )
}

export default DashboardTab
