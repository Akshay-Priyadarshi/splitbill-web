import React, { FC } from "react"
import { format } from "date-fns"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface IUser {
    id: number
    name: string
}

interface IProps {
    groupExpense: {
        id: string
        date: Date
        title: string
        amount: number
        category: string
        media: string[]
        addedBy: IUser
        madeBy: IUser[]
        madeFor: IUser[]
    }
}

enum ExpenseScenarios {
    LENT = "you lent",
    BORROWED = "you borrowed",
    NOT_INVOLVED = "not involved"
}

const GroupExpenseListItem: FC<IProps> = (props: IProps) => {
    const expenseScenario = ExpenseScenarios.NOT_INVOLVED as ExpenseScenarios
    return (
        <div className="flex items-center gap-x-4">
            <div className="h-full flex flex-col items-center justify-between">
                <p className="text-xs">
                    {format(props.groupExpense.date, "MMM")}
                </p>
                <p className="text-md">
                    {format(props.groupExpense.date, "dd")}
                </p>
            </div>
            <Image src={"/icon.png"} height={40} width={40} alt="" />
            <div className="flex flex-col items-start flex-1">
                <p className="text-md">{props.groupExpense.title}</p>
                <p className="text-sm">{props.groupExpense.addedBy.name}</p>
            </div>
            <div
                className={cn({
                    "text-muted-foreground":
                        ExpenseScenarios.NOT_INVOLVED === expenseScenario,
                    "text-success": ExpenseScenarios.LENT === expenseScenario,
                    "text-error": ExpenseScenarios.BORROWED === expenseScenario
                })}
            >
                <p className="text-xs">{expenseScenario}</p>
                {expenseScenario !== ExpenseScenarios.NOT_INVOLVED ? (
                    <p className={cn("text-md")}>
                        ${props.groupExpense.amount}
                    </p>
                ) : null}
            </div>
        </div>
    )
}

export default GroupExpenseListItem
