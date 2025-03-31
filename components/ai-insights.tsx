"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Insight = {
  id: string
  title: string
  description: string
  category: "strength" | "improvement" | "opportunity"
  timestamp: string
}

export function AIInsights() {
  const [insights, setInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)
  const [activeInsights, setActiveInsights] = useState<Insight[]>([])

  useEffect(() => {
    // Simulate loading insights data
    const timer = setTimeout(() => {
      const mockInsights = generateMockInsights()
      setInsights(mockInsights)
      setLoading(false)

      // Animate insights appearing one by one
      mockInsights.forEach((insight, index) => {
        setTimeout(() => {
          setActiveInsights((prev) => [...prev, insight])
        }, index * 150)
      })
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const generateMockInsights = (): Insight[] => {
    return [
      {
        id: "1",
        title: "Strong GitHub Contribution Pattern",
        description:
          "Your consistent code contributions show a reliable development pattern. This positively impacts your reputation score.",
        category: "strength",
        timestamp: "2023-06-15T14:32:00Z",
      },
      {
        id: "2",
        title: "DAO Governance Participation",
        description:
          "You've voted on 85% of eligible proposals, placing you in the top 10% of governance participants.",
        category: "strength",
        timestamp: "2023-06-14T09:15:00Z",
      },
      {
        id: "3",
        title: "Limited Cross-Platform Activity",
        description: "Your reputation could benefit from more activity across different ICP platforms and services.",
        category: "improvement",
        timestamp: "2023-06-13T16:45:00Z",
      },
      {
        id: "4",
        title: "DeFi Opportunity",
        description: "Based on your profile, you could qualify for reduced collateral requirements on ICP Lend.",
        category: "opportunity",
        timestamp: "2023-06-12T11:20:00Z",
      },
      {
        id: "5",
        title: "Code Quality Recognition",
        description: "Your pull requests have a 92% acceptance rate, indicating high-quality contributions.",
        category: "strength",
        timestamp: "2023-06-10T13:10:00Z",
      },
      {
        id: "6",
        title: "Social Engagement Gap",
        description: "Increasing your engagement on DSCVR could improve your social reputation component.",
        category: "improvement",
        timestamp: "2023-06-08T15:30:00Z",
      },
    ]
  }

  const getCategoryBadge = (category: Insight["category"]) => {
    switch (category) {
      case "strength":
        return (
          <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-emerald-500/30 px-3 py-1 transition-colors duration-300 hover:scale-105 transform">
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
              <path d="m9 18 6-6" />
              <path d="m9 12 6 6" />
            </svg>
            Strength
          </Badge>
        )
      case "improvement":
        return (
          <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-amber-500/30 px-3 py-1 transition-colors duration-300 hover:scale-105 transform">
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
              <path d="M12 5v14" />
              <path d="M18 13h-6" />
            </svg>
            Improvement
          </Badge>
        )
      case "opportunity":
        return (
          <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-purple-500/30 px-3 py-1 transition-colors duration-300 hover:scale-105 transform">
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
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Opportunity
          </Badge>
        )
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="text-sm text-slate-400">AI analyzing on-chain data...</div>
      </div>
    )
  }

  return (
    <div>
      <Tabs defaultValue="all" className="mb-4">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="strengths"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger
            value="improvements"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            Improvements
          </TabsTrigger>
          <TabsTrigger
            value="opportunities"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            Opportunities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {activeInsights.map((insight, index) => (
            <div
              key={insight.id}
              className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors duration-300">
                  {insight.title}
                </h4>
                {getCategoryBadge(insight.category)}
              </div>
              <p className="text-sm text-slate-300 mb-3 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {insight.description}
              </p>
              <div className="text-xs text-slate-400 font-medium">Generated on {formatDate(insight.timestamp)}</div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="strengths" className="mt-4 space-y-4">
          {activeInsights
            .filter((insight) => insight.category === "strength")
            .map((insight, index) => (
              <div
                key={insight.id}
                className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-white text-base group-hover:text-emerald-200 transition-colors duration-300">
                    {insight.title}
                  </h4>
                  {getCategoryBadge(insight.category)}
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {insight.description}
                </p>
                <div className="text-xs text-slate-400 font-medium">Generated on {formatDate(insight.timestamp)}</div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="improvements" className="mt-4 space-y-4">
          {activeInsights
            .filter((insight) => insight.category === "improvement")
            .map((insight, index) => (
              <div
                key={insight.id}
                className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 group"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-white text-base group-hover:text-amber-200 transition-colors duration-300">
                    {insight.title}
                  </h4>
                  {getCategoryBadge(insight.category)}
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {insight.description}
                </p>
                <div className="text-xs text-slate-400 font-medium">Generated on {formatDate(insight.timestamp)}</div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="opportunities" className="mt-4 space-y-4">
          {activeInsights
            .filter((insight) => insight.category === "opportunity")
            .map((insight, index) => (
              <div
                key={insight.id}
                className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors duration-300">
                    {insight.title}
                  </h4>
                  {getCategoryBadge(insight.category)}
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {insight.description}
                </p>
                <div className="text-xs text-slate-400 font-medium">Generated on {formatDate(insight.timestamp)}</div>
              </div>
            ))}
        </TabsContent>
      </Tabs>

      <div className="mt-4 mb-4 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-base font-semibold text-white flex items-center gap-2 group-hover:text-purple-200 transition-colors duration-300">
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
              className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 animate-pulse-slow"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            AI Recommendation
          </h4>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse">New</Badge>
        </div>

        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-md mb-3 hover:bg-purple-500/15 transition-colors duration-300 transform hover:scale-[1.01] transition-transform">
          <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
            Based on your current reputation profile, we recommend focusing on increasing your{" "}
            <span className="text-purple-400 font-medium">social engagement</span> across ICP platforms. This could
            improve your overall score by approximately <span className="text-purple-400 font-medium">7-10 points</span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-slate-900/50 p-3 rounded-md border border-slate-800/50 hover:bg-slate-900/80 transition-all duration-300 hover:border-purple-500/20 group/card">
            <h5 className="text-sm font-medium text-white mb-2 flex items-center gap-2 group-hover/card:text-purple-200 transition-colors duration-300">
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
                className="text-emerald-400 group-hover/card:scale-110 transition-transform duration-300"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Suggested Actions
            </h5>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Participate in DSCVR discussions (3+ per week)
              </li>
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Join OpenChat developer groups
              </li>
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Contribute to ICP community forums
              </li>
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Attend virtual meetups (1+ per month)
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-3 rounded-md border border-slate-800/50 hover:bg-slate-900/80 transition-all duration-300 hover:border-amber-500/20 group/card">
            <h5 className="text-sm font-medium text-white mb-2 flex items-center gap-2 group-hover/card:text-amber-200 transition-colors duration-300">
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
                className="text-amber-400 group-hover/card:scale-110 transition-transform duration-300"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              Potential Challenges
            </h5>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Time commitment (est. 3-5 hours weekly)
              </li>
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Learning curve for new platforms
              </li>
              <li className="flex items-center gap-1 hover:translate-x-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Maintaining consistent engagement
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-[1.02] transform"
      >
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
          className="mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
        Generate New Insights
      </Button>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

