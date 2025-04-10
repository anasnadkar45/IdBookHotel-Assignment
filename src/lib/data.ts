import { Stats, User } from "./types"


// Mock data for users
const mockUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    joinedAt: "2023-12-01",
    status: "Active",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    joinedAt: "2023-12-15",
    status: "Active",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Editor",
    joinedAt: "2024-01-05",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    role: "User",
    joinedAt: "2024-01-10",
    status: "Active",
  },
  {
    id: "5",
    name: "Ethan Hunt",
    email: "ethan@example.com",
    role: "User",
    joinedAt: "2024-01-15",
    status: "Pending",
  },
  {
    id: "6",
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    role: "Editor",
    joinedAt: "2024-01-20",
    status: "Active",
  },
  {
    id: "7",
    name: "George Miller",
    email: "george@example.com",
    role: "User",
    joinedAt: "2024-01-25",
    status: "Active",
  },
  {
    id: "8",
    name: "Hannah Baker",
    email: "hannah@example.com",
    role: "User",
    joinedAt: "2024-02-01",
    status: "Inactive",
  },
  {
    id: "9",
    name: "Ian Gallagher",
    email: "ian@example.com",
    role: "User",
    joinedAt: "2024-02-05",
    status: "Active",
  },
  {
    id: "10",
    name: "Jane Doe",
    email: "jane@example.com",
    role: "Admin",
    joinedAt: "2024-02-10",
    status: "Active",
  },
]

// Mock data for stats
const mockStats: Stats = {
  totalUsers: 1250,
  newSignups: 48,
  activeSessions: 186,
  userGrowth: 12,
  signupGrowth: 8,
  sessionGrowth: 5,
  weeklySignups: [
    { date: "Mon", count: 12 },
    { date: "Tue", count: 8 },
    { date: "Wed", count: 15 },
    { date: "Thu", count: 10 },
    { date: "Fri", count: 7 },
    { date: "Sat", count: 5 },
    { date: "Sun", count: 4 },
  ],
}

// Simulate API calls with a delay
export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers)
    }, 800)
  })
}

export const fetchStats = (): Promise<Stats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStats)
    }, 800)
  })
}
