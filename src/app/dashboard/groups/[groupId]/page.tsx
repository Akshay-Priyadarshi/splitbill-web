"use client"
import React, { useRef } from "react"
import { ArrowLeftIcon, GearIcon } from "@radix-ui/react-icons/dist"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { GroupExpenseList } from "@/components/group-expense-list"

interface IProps {
    params: {
        groupId: string
    }
}

const GroupSpecificPage: React.FC<IProps> = ({ params }) => {
    const headerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({ container: headerRef })
    useMotionValueEvent(scrollY, "change", (val) => {
        console.log(val)
    })
    const { groupId } = params
    const buttons = [
        "Settle Up",
        "Balances",
        "Totals",
        "Charts",
        "Whiteboard",
        "Export"
    ]
    return (
        <div className="">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
                ref={headerRef}
                className="bg-secondary h-20 w-full py-6 px-4 relative"
            >
                <nav className="flex justify-between items-center">
                    <Link href="/dashboard/groups">
                        <ArrowLeftIcon className="size-5" />
                    </Link>
                    <h1 className="text-xl hidden">G2 | ABHIGRUHA</h1>
                    <GearIcon className="size-5" />
                </nav>
                <figure className="p-2 rounded-lg absolute bg-background bottom-[-3rem] left-14  flex justify-center items-center">
                    <Image
                        className="z-10 aspect-square object-contain"
                        src="/logo.svg"
                        alt="Group Icon"
                        width={65}
                        height={65}
                        priority={true}
                    />
                </figure>
            </motion.header>
            <div className="mt-14 px-14 space-y-3">
                <h1 className="text-xl">G2 | ABHIGRUHA</h1>
                <p className="text-sm">Osho owes you $883.00</p>
            </div>
            <div
                className="w-full overflow-x-auto flex gap-x-4 my-6 px-4 no-scrollbar"
                style={{}}
            >
                {buttons.map((button) => (
                    <Button className="" key={button} variant="default">
                        {button}
                    </Button>
                ))}
            </div>
            <GroupExpenseList />
        </div>
    )
}

export default GroupSpecificPage
