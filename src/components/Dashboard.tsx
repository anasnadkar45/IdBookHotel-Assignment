import { useEffect, useState } from "react"
import { Stats, User } from "../lib/types"
import { fetchStats, fetchUsers } from "../lib/data"
import Sidebar from "./sidebar"
import KpiCards from "./kpi-cards"
import UserChart from "./user-chart"
import UserTable from "./user-table"
import Header from "./Header"

export default function Dashboard() {
    const [users, setUsers] = useState<User[]>([])
    const [stats, setStats] = useState<Stats | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const [usersData, statsData] = await Promise.all([fetchUsers(), fetchStats()])
                setUsers(usersData)
                setStats(statsData)
            } catch (error) {
                console.error("Failed to load data:", error)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return (
        <div className="flex w-screen h-screen bg-gray-100 dark:bg-[#121212]">
            
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="relative w-16 h-16">
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 max-w-7xl mx-auto">
                            {stats && <KpiCards stats={stats} />}

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                                    <div className="p-6">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">User Growth</h2>
                                        <UserChart data={stats?.weeklySignups || []} />
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Quick Stats</h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 dark:text-gray-400">Active Users</span>
                                            <span className="text-gray-900 dark:text-white font-medium">
                                                {stats ? Math.round(stats.totalUsers * 0.8) : 0}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                                            <span className="text-gray-900 dark:text-white font-medium">68%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full"
                                                style={{ width: "68%" }}
                                            ></div>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-gray-600 dark:text-gray-400">Bounce Rate</span>
                                            <span className="text-gray-900 dark:text-white font-medium">24%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <div className="bg-rose-600 dark:bg-rose-400 h-2 rounded-full" style={{ width: "24%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                                <UserTable users={users} />
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
