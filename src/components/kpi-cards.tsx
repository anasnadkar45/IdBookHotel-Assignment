import { Users, UserPlus, Activity, TrendingUp } from "lucide-react"
import { Stats } from "../lib/types"

interface KpiCardsProps {
  stats: Stats
}

export default function KpiCards({ stats }: KpiCardsProps) {
  const kpiData = [
    {
      number: stats.totalUsers,
      label: "Total Users",
      icon: <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
      growth: stats.userGrowth,
      period: "from last month",
      bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
      iconClass: "text-indigo-600 dark:text-indigo-400",
    },
    {
      number: stats.newSignups,
      label: "New Signups",
      icon: <UserPlus className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      growth: stats.signupGrowth,
      period: "from last week",
      bgClass: "bg-emerald-50 dark:bg-emerald-900/20",
      iconClass: "text-emerald-600 dark:text-emerald-400",
    },
    {
      number: stats.activeSessions,
      label: "Active Sessions",
      icon: <Activity className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
      growth: stats.sessionGrowth,
      period: "from yesterday",
      isNegative: stats.sessionGrowth < 0,
      bgClass: "bg-amber-50 dark:bg-amber-900/20",
      iconClass: "text-amber-600 dark:text-amber-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpiData.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 transition-all duration-200 hover:shadow-md"
        >
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl ${item.bgClass}`}>{item.icon}</div>
            <div
              className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                item.isNegative
                  ? "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
                  : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
              }`}
            >
              <TrendingUp className={`h-3 w-3 mr-1 ${item.isNegative ? "rotate-180" : ""}`} />
              {Math.abs(item.growth)}%
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.number.toLocaleString()}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.label}</p>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            {item.isNegative ? "Decreased" : "Increased"} {Math.abs(item.growth)}% {item.period}
          </p>
        </div>
      ))}
    </div>
  )
}
