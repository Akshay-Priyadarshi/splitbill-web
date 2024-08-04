import React from "react"
import GroupExpenseListItem from "./group-expense-list-item"

export const GroupExpenseList = () => {
    const [groupExpenses, setGroupExpenses] = React.useState([
        {
            id: "12",
            date: new Date(),
            title: "Wifi",
            amount: 800,
            category: "",
            media: [],
            addedBy: {
                id: 1,
                name: "Akshay"
            },
            madeBy: [
                {
                    id: 1,
                    name: "Akshay",
                    percentage: 100
                }
            ],
            madeFor: [
                {
                    id: 2,
                    name: "Akshay"
                },
                {
                    id: 3,
                    name: "Osho"
                }
            ]
        }
    ])
    return (
        <div className="px-4 py-4">
            {groupExpenses.map((groupExpense) => (
                
                <GroupExpenseListItem
                    key={groupExpense.id}
                    groupExpense={groupExpense}
                />
            ))}
        </div>
    )
}
