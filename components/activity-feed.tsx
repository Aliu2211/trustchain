"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type Activity = {
  id: string
  type: "contribution" | "governance" | "defi" | "social" | "verification"
  title: string
  description: string
  impact: number // Positive or negative impact on reputation
  timestamp: string
  source: string
  verified: boolean
}

interface ActivityFeedProps {
  extended?: boolean
}

export function ActivityFeed({ extended = false }: ActivityFeedProps) {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleActivities, setVisibleActivities] = useState<Activity[]>([])

  useEffect(() => {
    // Simulate loading activity data
    const timer = setTimeout(() => {
      const mockActivities = generateMockActivities()
      setActivities(mockActivities)
      setLoading(false)

      // Animate activities appearing one by one
      if (extended) {
        setVisibleActivities([])
        mockActivities.forEach((activity, index) => {
          setTimeout(() => {
            setVisibleActivities((prev) => [...prev, activity])
          }, index * 100)
        })
      } else {
        const firstFour = mockActivities.slice(0, 4)
        setVisibleActivities([])
        firstFour.forEach((activity, index) => {
          setTimeout(() => {
            setVisibleActivities((prev) => [...prev, activity])
          }, index * 100)
        })
      }
    }, 1200)

    return () => clearTimeout(timer)
  }, [extended])

  const generateMockActivities = (): Activity[] => {
    const mockActivities: Activity[] = [
      {
        id: "1",
        type: "contribution",
        title: "GitHub Commit",
        description: "Merged pull request to main branch",
        impact: 2,
        timestamp: "2023-06-15T14:32:00Z",
        source: "GitHub",
        verified: true,
      },
      {
        id: "2",
        type: "governance",
        title: "DAO Vote",
        description: "Voted on proposal #42: Protocol Upgrade",
        impact: 3,
        timestamp: "2023-06-14T09:15:00Z",
        source: "OpenChat DAO",
        verified: true,
      },
      {
        id: "3",
        type: "defi",
        title: "Loan Repayment",
        description: "Successfully repaid loan on time",
        impact: 5,
        timestamp: "2023-06-12T16:45:00Z",
        source: "DeFi Protocol",
        verified: true,
      },
      {
        id: "4",
        type: "social",
        title: "Community Engagement",
        description: "Answered 5 questions in the developer forum",
        impact: 1,
        timestamp: "2023-06-10T11:20:00Z",
        source: "DSCVR",
        verified: true,
      },
      {
        id: "5",
        type: "verification",
        title: "Identity Verification",
        description: "Linked Internet Identity to GitHub account",
        impact: 4,
        timestamp: "2023-06-08T13:10:00Z",
        source: "Internet Identity",
        verified: true,
      },
      {
        id: "6",
        type: "contribution",
        title: "Code Review",
        description: "Reviewed and approved 3 pull requests",
        impact: 2,
        timestamp: "2023-06-05T15:30:00Z",
        source: "GitHub",
        verified: true,
      },
      {
        id: "7",
        type: "governance",
        title: "Proposal Creation",
        description: "Created proposal for community treasury allocation",
        impact: 4,
        timestamp: "2023-06-03T10:45:00Z",
        source: "OpenChat DAO",
        verified: true,
      },
      {
        id: "8",
        type: "defi",
        title: "Liquidity Provision",
        description: "Provided liquidity to DEX pool for 30 days",
        impact: 3,
        timestamp: "2023-06-01T09:20:00Z",
        source: "DeFi Protocol",
        verified: true,
      },
    ]

    return mockActivities
  }

  const getTypeIcon = (type: Activity["type"]) => {
    switch (type) {
      case "contribution":
        return (
          <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 shadow-sm shadow-fuchsia-500/10 group-hover:scale-110 transition-transform duration-300">
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
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </div>
        )
      case "governance":
        return (
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shadow-sm shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300">
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
              <path d="m9 11 3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
        )
      case "defi":
        return (
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-300">
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
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </div>
        )
      case "social":
        return (
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm shadow-amber-500/10 group-hover:scale-110 transition-transform duration-300">
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
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <circle cx="12" cy="10" r="2" />
              <line x1="8" x2="8" y1="2" y2="4" />
              <line x1="16" x2="16" y1="2" y2="4" />
            </svg>
          </div>
        )
      case "verification":
        return (
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        )
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const activityStats = {
    total: 42,
    positive: 38,
    negative: 4,
    categories: {
      contribution: 15,
      governance: 12,
      defi: 8,
      social: 5,
      verification: 2,
    },
  }

  if (extended) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 flex flex-col hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 hover:translate-y-[-2px]">
            <span className="text-xs text-slate-400 mb-1">Total Activities</span>
            <span className="text-xl font-bold text-white">{activityStats.total}</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 flex flex-col hover:bg-slate-800/80 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:translate-y-[-2px]">
            <span className="text-xs text-slate-400 mb-1">Positive Impact</span>
            <span className="text-xl font-bold text-emerald-400">{activityStats.positive}</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 flex flex-col hover:bg-slate-800/80 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 hover:translate-y-[-2px]">
            <span className="text-xs text-slate-400 mb-1">Negative Impact</span>
            <span className="text-xl font-bold text-red-400">{activityStats.negative}</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 flex flex-col hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 hover:translate-y-[-2px]">
            <span className="text-xs text-slate-400 mb-1">Net Impact</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-purple-400">
                +{activityStats.positive - activityStats.negative}
              </span>
              <span className="text-xs text-emerald-400">↑</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 mb-4 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
          <h4 className="text-sm font-semibold text-white mb-3">Activity Categories</h4>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(activityStats.categories).map(([category, count]) => (
              <div key={category} className="flex flex-col items-center group">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-all duration-300 group-hover:scale-110 ${
                    category === "contribution"
                      ? "bg-fuchsia-500/20 text-fuchsia-400 group-hover:bg-fuchsia-500/30"
                      : category === "governance"
                        ? "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30"
                        : category === "defi"
                          ? "bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30"
                          : category === "social"
                            ? "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30"
                            : "bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30"
                  }`}
                >
                  {count}
                </div>
                <span className="text-xs text-slate-400 capitalize group-hover:text-white transition-colors duration-300">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base font-semibold text-white">Activity Timeline</h3>
          <div className="flex gap-2">
            <select className="bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 px-2 py-1 hover:border-purple-500/50 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option>All Types</option>
              <option>Contribution</option>
              <option>Governance</option>
              <option>DeFi</option>
              <option>Social</option>
            </select>
            <select className="bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 px-2 py-1 hover:border-purple-500/50 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
        </div>

        <ScrollArea className="h-[500px]">
          <div className="space-y-4">
            {visibleActivities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                }}
              >
                {getTypeIcon(activity.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors duration-300">
                      {activity.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {activity.verified && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      )}
                      <span className="text-xs text-slate-400 font-medium">{formatDate(activity.timestamp)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-xs bg-slate-700/50 border-slate-600 group-hover:bg-slate-700 transition-colors duration-300"
                    >
                      {activity.source}
                    </Badge>
                    <span
                      className={`text-sm font-medium ${activity.impact > 0 ? "text-emerald-400" : "text-red-400"} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {activity.impact > 0 ? "+" : ""}
                      {activity.impact} reputation
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <ScrollArea className={extended ? "h-[500px]" : "h-64"}>
      <div className="space-y-4">
        {visibleActivities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
            }}
          >
            {getTypeIcon(activity.type)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors duration-300">
                  {activity.title}
                </h4>
                <div className="flex items-center gap-2">
                  {activity.verified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                  <span className="text-xs text-slate-400 font-medium">{formatDate(activity.timestamp)}</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300">
                {activity.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="text-xs bg-slate-700/50 border-slate-600 group-hover:bg-slate-700 transition-colors duration-300"
                >
                  {activity.source}
                </Badge>
                <span
                  className={`text-sm font-medium ${activity.impact > 0 ? "text-emerald-400" : "text-red-400"} group-hover:scale-110 transition-transform duration-300`}
                >
                  {activity.impact > 0 ? "+" : ""}
                  {activity.impact} reputation
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ScrollArea>
  )
}

