"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ReputationScore() {
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [animateScore, setAnimateScore] = useState(false)

  useEffect(() => {
    // Simulate loading the reputation score
    const timer = setTimeout(() => {
      setLoading(false)
      // Start score animation after loading
      setTimeout(() => {
        setAnimateScore(true)
      }, 100)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (animateScore) {
      let currentScore = 0
      const targetScore = 78
      const interval = setInterval(() => {
        currentScore += 2
        setScore(currentScore)
        if (currentScore >= targetScore) {
          clearInterval(interval)
          setScore(targetScore)
        }
      }, 30)

      return () => clearInterval(interval)
    }
  }, [animateScore])

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-400"
    if (score >= 60) return "text-purple-400"
    if (score >= 40) return "text-amber-400"
    return "text-red-400"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Poor"
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-6 group">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full transform -rotate-90 transition-all duration-1000 group-hover:scale-105"
            >
              <circle cx="50" cy="50" r="45" fill="transparent" stroke="#1e293b" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#gradient)"
                strokeWidth="10"
                strokeDasharray={`${(score / 100) * 283} 283`}
                className="drop-shadow-[0_0_4px_rgba(147,51,234,0.5)] transition-all duration-1000"
                style={{ transition: "stroke-dasharray 1s ease-in-out" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" /> {/* purple-600 */}
                  <stop offset="100%" stopColor="#c026d3" /> {/* fuchsia-600 */}
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`text-5xl font-bold ${getScoreColor(score)} transition-all duration-500 group-hover:scale-110`}
              >
                {score}
              </span>
              <span className="text-sm font-medium text-slate-300 mt-1">{getScoreLabel(score)}</span>
            </div>
          </>
        )}
      </div>

      <div className="w-full space-y-4">
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 group">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-300 font-medium">Contribution</span>
            <span className="font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
              82/100
            </span>
          </div>
          <Progress
            value={82}
            className="h-2.5 bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"
            indicatorClassName="bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-colors duration-300"
          />
        </div>

        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 group">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-300 font-medium">Reliability</span>
            <span className="font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
              75/100
            </span>
          </div>
          <Progress
            value={75}
            className="h-2.5 bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"
            indicatorClassName="bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-colors duration-300"
          />
        </div>

        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 group">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-300 font-medium">Governance</span>
            <span className="font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
              68/100
            </span>
          </div>
          <Progress
            value={68}
            className="h-2.5 bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"
            indicatorClassName="bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-colors duration-300"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 py-1.5 px-3 hover:bg-purple-500/30 transition-colors duration-300 hover:scale-105 transform">
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
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="M14.5 4h-5L7 12l2.5 8h5l2.5-8-2.5-8Z" />
          </svg>
          DAO Contributor
        </Badge>
        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 py-1.5 px-3 hover:bg-emerald-500/30 transition-colors duration-300 hover:scale-105 transform">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
          DeFi Verified
        </Badge>
        <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 py-1.5 px-3 hover:bg-fuchsia-500/30 transition-colors duration-300 hover:scale-105 transform">
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
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
          Developer
        </Badge>
      </div>

      <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
            Reputation Breakdown
          </h4>
          <span className="text-xs text-slate-400">Last updated: 2 hours ago</span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">On-chain Activity</span>
            <span className="text-purple-300 font-medium">32/40</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Social Verification</span>
            <span className="text-purple-300 font-medium">18/20</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Governance Participation</span>
            <span className="text-purple-300 font-medium">15/20</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-300">Developer Contributions</span>
            <span className="text-purple-300 font-medium">13/20</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-700/50 flex justify-between items-center">
          <span className="text-xs text-slate-400">Reputation Age</span>
          <span className="text-xs font-medium text-white">187 days</span>
        </div>
      </div>
    </div>
  )
}

