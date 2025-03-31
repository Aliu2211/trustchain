"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

type AuthMode = "login" | "register" | "recover"

export function AuthForm() {
  const [authMode, setAuthMode] = useState<AuthMode>("login")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  })
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    // Animate form appearance
    const timer = setTimeout(() => {
      setFormVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate form
    if (authMode === "register" && formState.password !== formState.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would handle authentication here
      console.log("Authentication successful", { mode: authMode, email: formState.email })

      // Redirect to dashboard or show success message
      window.location.href = "/"
    } catch (err) {
      setError("Authentication failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  return (
    <div
      className={`transition-all duration-500 transform ${
        formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 group">
        <CardHeader className="pb-2 border-b border-slate-800/50">
          <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
            {authMode === "login" ? "Welcome Back" : authMode === "register" ? "Create Account" : "Recover Password"}
          </CardTitle>
          <CardDescription className="text-slate-400">
            {authMode === "login"
              ? "Sign in to your TrustChain account"
              : authMode === "register"
                ? "Join the decentralized reputation network"
                : "Reset your password"}
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="credentials" className="w-full">
          <div className="px-6 pt-6">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800 border border-slate-700 p-1">
              <TabsTrigger
                value="credentials"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Credentials
              </TabsTrigger>
              <TabsTrigger
                value="web3"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Web3 Login
              </TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="pt-6">
            {error && (
              <Alert className="mb-6 bg-red-500/10 border-red-500/30 text-red-400">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <TabsContent value="credentials" className="mt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-slate-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formState.password}
                    onChange={handleInputChange}
                    className="bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>

                {authMode === "register" && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-slate-300">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      required
                      value={formState.confirmPassword}
                      onChange={handleInputChange}
                      className="bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                )}

                {authMode === "login" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        checked={formState.rememberMe}
                        onCheckedChange={(checked) => setFormState({ ...formState, rememberMe: checked as boolean })}
                        className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor="rememberMe" className="text-sm text-slate-400 cursor-pointer">
                        Remember me
                      </Label>
                    </div>
                    <Button
                      type="button"
                      variant="link"
                      className="text-purple-400 hover:text-purple-300 p-0 h-auto text-sm"
                      onClick={() => setAuthMode("recover")}
                    >
                      Forgot password?
                    </Button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group-hover:scale-[1.01] transform"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : authMode === "login" ? (
                    "Sign In"
                  ) : authMode === "register" ? (
                    "Create Account"
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="web3" className="mt-0 space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700/50 flex flex-col items-center shadow-inner">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/20 animate-pulse-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Internet Identity</h3>
                <p className="text-sm text-slate-400 text-center mb-6">
                  The secure, anonymous authentication system for the Internet Computer
                </p>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  size="lg"
                >
                  Connect with Internet Identity
                </Button>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700/50 space-y-3 shadow-inner">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-700 hover:bg-slate-700/50 h-12 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-fuchsia-400"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Connect with GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-700 hover:bg-slate-700/50 h-12 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-purple-400"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  Connect with Twitter
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-700 hover:bg-slate-700/50 h-12 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-sky-400"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 0 0-4 0" />
                  </svg>
                  Connect with LinkedIn
                </Button>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-md p-3">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <div>
                    <h5 className="text-sm font-medium text-white mb-1">Web3 Authentication</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Connect with your Internet Identity or social accounts to build your decentralized reputation
                      across the Internet Computer ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>

        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="w-full flex items-center gap-3 my-2">
            <div className="h-px flex-1 bg-slate-800"></div>
            <span className="text-xs text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>

          {authMode === "login" ? (
            <Button
              type="button"
              variant="outline"
              className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              onClick={() => setAuthMode("register")}
            >
              Create a new account
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              onClick={() => setAuthMode("login")}
            >
              Sign in to existing account
            </Button>
          )}

          <div className="text-xs text-slate-500 text-center mt-4">
            By continuing, you agree to TrustChain's{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </CardFooter>
      </Card>

      <div className="mt-6 flex justify-center">
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 py-1.5 px-3 hover:bg-purple-500/30 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          Secure Authentication
        </Badge>
      </div>
    </div>
  )
}

