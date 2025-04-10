export interface User {
    id: string
    name: string
    email: string
    role: string
    joinedAt: string
    status?: string
  }
  
  export interface Stats {
    totalUsers: number
    newSignups: number
    activeSessions: number
    userGrowth: number
    signupGrowth: number
    sessionGrowth: number
    weeklySignups: { date: string; count: number }[]
  }
  