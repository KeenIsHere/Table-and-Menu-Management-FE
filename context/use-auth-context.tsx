"use client"

import { createContext, useContext, type ReactNode } from "react"

interface AuthContextType {
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const logout = () => {
    // Mock logout function
    alert("Logged out successfully!")
    // In a real app, this would clear tokens, redirect to login, etc.
  }

  return <AuthContext.Provider value={{ logout }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
