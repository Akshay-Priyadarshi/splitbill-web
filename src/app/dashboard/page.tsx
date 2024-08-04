"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const DashboardPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace("/dashboard/groups")
    }, [router])

    return null
}

export default DashboardPage
