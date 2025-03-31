"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  id: string
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("trustchain_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user", error)
        localStorage.removeItem("trustchain_user")
      }
    }
    setLoading(false)
  }, [])

  const login = (user: User) => {
    setUser(user)
    localStorage.setItem("trustchain_user", JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("trustchain_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

