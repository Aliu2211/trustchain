"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ReputationScore } from "@/components/reputation-score"
import { ReputationHistory } from "@/components/reputation-history"
import { ActivityFeed } from "@/components/activity-feed"
import { StakeReputation } from "@/components/stake-reputation"
import { ConnectIdentity } from "@/components/connect-identity"
import { DAppsIntegration } from "@/components/dapps-integration"
import { AIInsights } from "@/components/ai-insights"
import { PlatformConnections } from "@/components/platform-connections"
import { AnimatedBackground } from "@/components/animated-background"
//const AnimatedBackground = dynamic(() => import('@/components/animated-background'), { ssr: false })

export default function Home() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  // Show loading state if checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // If not authenticated, the useEffect will redirect
  // Only render the page content if we have a user
  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/20 animate-pulse-slow group-hover:animate-none group-hover:scale-110 transition-transform duration-300">
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
                  className="text-white"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M16 13v-1h-3v1" />
                  <path d="M5 17v-1h10v1" />
                  <line x1="13" x2="13" y1="17" y2="22" />
                  <line x1="8" x2="8" y1="17" y2="22" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text group-hover:from-purple-300 group-hover:to-white transition-all duration-300">
                  TrustChain
                </h1>
                <p className="text-xs text-slate-400">Decentralized Reputation Layer</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 bg-slate-900/60 px-4 py-2 rounded-full border border-slate-800/50 backdrop-blur-md hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400">Rank</span>
                <span className="text-sm font-semibold text-white">
                  <span className="inline-block animate-bounce-subtle">#</span>342
                </span>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400">Network</span>
                <span className="text-sm font-semibold text-purple-400">ICP</span>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400">Cycle</span>
                <span className="text-sm font-semibold text-white">14 Days</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors relative hover:scale-110 transition-transform duration-300">
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
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center animate-pulse">
                    3
                  </span>
                </button>
              </div>
              <Badge
                variant="outline"
                className="bg-slate-800/80 text-purple-400 border-purple-500/30 flex items-center gap-1 px-3 py-1 shadow-sm hover:bg-slate-700/80 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                ICP Mainnet
              </Badge>
              <ConnectIdentity />
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] group">
              <CardHeader className="pb-2 border-b border-slate-800/50">
                <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Reputation Score
                </CardTitle>
                <CardDescription className="text-slate-400">Your on-chain trust metric</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ReputationScore />
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] group">
              <CardHeader className="pb-2 border-b border-slate-800/50">
                <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Platform Connections
                </CardTitle>
                <CardDescription className="text-slate-400">Connected data sources</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <PlatformConnections />
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] group">
              <CardHeader className="pb-2 border-b border-slate-800/50">
                <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  AI Insights
                </CardTitle>
                <CardDescription className="text-slate-400">On-chain AI analysis</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <AIInsights />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 rounded-lg p-4 flex items-center gap-4 backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] hover:bg-slate-800/60">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 animate-pulse-slow">
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
                >
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Weekly Growth</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-white">+12.5%</p>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">↑ 3.2%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 rounded-lg p-4 flex items-center gap-4 backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] hover:bg-slate-800/60">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 animate-pulse-slow">
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
                >
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Network Percentile</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-white">Top 15%</p>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">↑ 2%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 rounded-lg p-4 flex items-center gap-4 backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] hover:bg-slate-800/60">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse-slow">
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
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Trust Score</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-white">78/100</p>
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded-full">↓ 1.5%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 rounded-lg p-4 flex items-center gap-4 backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] hover:bg-slate-800/60">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 animate-pulse-slow">
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
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Network Connections</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-white">127</p>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">↑ 12</span>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList className="bg-slate-900 border border-slate-800 p-1 shadow-lg">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Activity
              </TabsTrigger>
              <TabsTrigger
                value="stake"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Reputation Staking
              </TabsTrigger>
              <TabsTrigger
                value="dapps"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                dApps Integration
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] group">
                  <CardHeader className="pb-2 border-b border-slate-800/50">
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      Reputation History
                    </CardTitle>
                    <CardDescription className="text-slate-400">Your trust score over time</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ReputationHistory />
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 hover:translate-y-[-5px] group">
                  <CardHeader className="pb-2 border-b border-slate-800/50">
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      Recent Activity
                    </CardTitle>
                    <CardDescription className="text-slate-400">Latest reputation-affecting events</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ActivityFeed />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="activity" className="mt-6">
              <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 group">
                <CardHeader className="pb-2 border-b border-slate-800/50">
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    Activity Feed
                  </CardTitle>
                  <CardDescription className="text-slate-400">All reputation-affecting events</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ActivityFeed extended={true} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stake" className="mt-6">
              <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 group">
                <CardHeader className="pb-2 border-b border-slate-800/50">
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    Reputation Staking
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Stake your reputation for benefits across the ecosystem
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <StakeReputation />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dapps" className="mt-6">
              <Card className="bg-slate-900/60 border-slate-800 shadow-xl shadow-purple-500/5 overflow-hidden backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-500 group">
                <CardHeader className="pb-2 border-b border-slate-800/50">
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    dApps Integration
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Applications using your TrustChain reputation
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <DAppsIntegration />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <footer className="mt-auto border-t border-slate-800 py-8 bg-slate-950/50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center animate-pulse-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white">TrustChain</span>
                </div>
                <p className="text-slate-400 mb-4">Decentralized Reputation Layer on Internet Computer Protocol</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors hover:scale-110 transition-transform duration-300"
                  >
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
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors hover:scale-110 transition-transform duration-300"
                  >
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
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors hover:scale-110 transition-transform duration-300"
                  >
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
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      Developer Hub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      Community Forum
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Ecosystem</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      Internet Computer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      DSCVR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      OpenChat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      ICP Ecosystem
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates</p>
                <div className="flex group">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-slate-800 border border-slate-700 rounded-l-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 w-full transition-all duration-300 group-hover:border-purple-500"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-md px-3 py-2 text-sm transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-500">© {new Date().getFullYear()} TrustChain. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-y-[-2px] inline-block transition-transform duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-y-[-2px] inline-block transition-transform duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-white transition-colors hover:translate-y-[-2px] inline-block transition-transform duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

