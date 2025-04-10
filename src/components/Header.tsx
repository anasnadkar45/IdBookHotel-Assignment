"use client"

import { BiBell, BiSearch, BiUser } from "react-icons/bi"
import Toggle from "./Toggle"
import { useState } from "react"


export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-2 px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white mr-8">Dashboard</h1>

                    <div className={`relative ${searchOpen ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`w-full py-2 pl-10 pr-4 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-900 dark:text-white`}
                        />
                        <BiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                    >
                        <BiSearch className="h-5 w-5" />
                    </button>

                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 relative">
                        <BiBell className="h-5 w-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                    </button>

                    <Toggle />

                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>

                    <button className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <BiUser className="h-4 w-4" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}
