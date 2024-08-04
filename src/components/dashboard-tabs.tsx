"use client"
import React from "react"
import GroupIcon from "../../public/icons/group.svg"
import FriendIcon from "../../public/icons/friend.svg"
import ActivityIcon from "../../public/icons/activity.svg"
import AccountIcon from "../../public/icons/account.svg"
import DashboardTab from "@/components/dashboard-tab"
import { usePathname } from "next/navigation"

const DashboardTabs = () => {
    const urlPath = usePathname()

    const tabs = [
        {
            name: "Groups",
            Icon: GroupIcon,
            href: "/dashboard/groups"
        },
        {
            name: "Friends",
            Icon: FriendIcon,
            href: "/dashboard/friends"
        },
        {
            name: "Activity",
            Icon: ActivityIcon,
            href: "/dashboard/activity"
        },
        {
            name: "Account",
            Icon: AccountIcon,
            href: "/dashboard/account"
        }
    ]
    const isPathActive = (tabPath: string): boolean => {
        const currentUrlBasePath = urlPath.split("/").slice(0, 3).join("/")
        const currentTabBasePath = tabPath.split("/").slice(0, 3).join("/")
        return currentUrlBasePath === currentTabBasePath
    }
    return (
        <nav className="flex py-4 bg-secondary">
            {tabs.map((tab) => (
                <DashboardTab
                    key={tab.name}
                    Icon={tab.Icon}
                    href={tab.href}
                    name={tab.name}
                    active={isPathActive(tab.href)}
                />
            ))}
        </nav>
    )
}

export default DashboardTabs
