import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "SplitBill",
    description: "Split your bills with friends"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />
            </head>
            <body className={cn(inter.className)}>
                <ThemeProvider
                    storageKey="theme"
                    attribute="class"
                    defaultTheme="system"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
