"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PasswordResetForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [formVisible, setFormVisible] = useState(false)

  useState(() => {
    // Animate form appearance
    setTimeout(() => {
      setFormVisible(true)
    }, 300)
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setSuccess(`Password reset instructions have been sent to ${email}. Please check your inbox.`)
    } catch (err) {
      setError("Failed to send reset instructions. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
            Reset Password
          </CardTitle>
          <CardDescription className="text-slate-400">Enter your email to receive reset instructions</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {error && (
            <Alert className="mb-6 bg-red-500/10 border-red-500/30 text-red-400">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-6 bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-md p-3 mb-2">
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
                  <h5 className="text-sm font-medium text-white mb-1">Password Reset Instructions</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We'll send an email with instructions to reset your password. If you don't receive an email within a
                    few minutes, please check your spam folder.
                  </p>
                </div>
              </div>
            </div>

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
                  Sending...
                </div>
              ) : (
                "Send Reset Instructions"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center pt-0">
          <Button
            variant="link"
            onClick={() => router.push("/login")}
            className="text-purple-400 hover:text-purple-300"
          >
            Return to login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

