import DashboardTabs from "@/components/dashboard-tabs"
import React, { PropsWithChildren } from "react"

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="h-screen w-screen flex flex-col">
            <section className="flex-grow overflow-y-hidden">
                {children}
            </section>
            <DashboardTabs />
        </main>
    )
}

export default DashboardLayout
