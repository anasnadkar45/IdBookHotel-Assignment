import { Home, Users, BarChart2, Settings, HelpCircle, LogOut } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Users", active: false },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ]

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col`}
    >
      <div className="p-6 flex items-center justify-between">
        <div className={`flex items-center ${collapsed ? "justify-center w-full" : ""}`}>
          <div className="w-10 h-10 rounded-xl bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          {!collapsed && <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">Dash</span>}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? "hidden" : ""} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-4 py-3 rounded-xl text-sm font-medium ${
                  item.active
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon className={`h-5 w-5 ${item.active ? "text-indigo-600 dark:text-indigo-400" : ""}`} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className={`flex items-center ${
                collapsed ? "justify-center" : ""
              } px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800`}
            >
              <HelpCircle className="h-5 w-5" />
              {!collapsed && <span className="ml-3">Help</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center ${
                collapsed ? "justify-center" : ""
              } px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800`}
            >
              <LogOut className="h-5 w-5" />
              {!collapsed && <span className="ml-3">Logout</span>}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
