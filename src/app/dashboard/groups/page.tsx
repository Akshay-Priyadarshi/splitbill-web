"use client"
import React from "react"
import Image from "next/image"
import AddGroupIcon from "../../../../public/icons/add_group.svg"
import FilterGroupIcon from "../../../../public/icons/filter_group.svg"
import Link from "next/link"

const GroupsPage = () => {
    const [groups, setGroups] = React.useState([
        {
            id: 1,
            name: "Group 1"
        },
        {
            id: 2,
            name: "Group 2"
        },
        {
            id: 3,
            name: "Group 3"
        },
        {
            id: 1,
            name: "Group 1"
        },
        {
            id: 2,
            name: "Group 2"
        },
        {
            id: 3,
            name: "Group 3"
        },
        {
            id: 1,
            name: "Group 1"
        },
        {
            id: 2,
            name: "Group 2"
        },
        {
            id: 3,
            name: "Group 3"
        },
        {
            id: 1,
            name: "Group 1"
        },
        {
            id: 2,
            name: "Group 2"
        },
        {
            id: 3,
            name: "Group 3"
        }
    ])

    return (
        <div className="h-full flex flex-col">
            <div className="bg-secondary flex py-4 px-4 justify-end border-b-2 z-10 shadow-sm">
                <AddGroupIcon className="size-5 fill-secondary-foreground" />
            </div>
            <div className="flex justify-between py-4 px-4">
                <p>Overall, you are owed $1895.80</p>
                <FilterGroupIcon className="size-5 fill-primary" />
            </div>
            <div className="flex-grow overflow-y-scroll flex flex-col gap-y-2">
                {groups.map((group) => (
                    <Link
                        href={`/dashboard/groups/${group.id}`}
                        key={group.id}
                        className="flex items-center justify-between gap-x-2"
                    >
                        <Image
                            className=" rounded-sm"
                            src="/adaptive-icon.png"
                            alt="Group Icon"
                            width={70}
                            height={70}
                            priority={true}
                        />
                        <div className="flex-grow flex flex-col space-y-1">
                            <p className="text-md">{group.name}</p>
                            <p className="text-sm text-green-600">
                                you are owed $883.00
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GroupsPage
