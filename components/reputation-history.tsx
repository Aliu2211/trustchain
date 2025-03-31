"use client"

import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "@/components/ui/chart"

type DataPoint = {
  date: string
  score: number
}

export function ReputationHistory() {
  const [data, setData] = useState<DataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Simulate loading reputation history data
    const timer = setTimeout(() => {
      const mockData = generateMockData()
      setData(mockData)
      setLoading(false)

      // Set animation complete after a delay to allow the chart to animate in
      setTimeout(() => {
        setAnimationComplete(true)
      }, 1000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const generateMockData = (): DataPoint[] => {
    const now = new Date()
    const data: DataPoint[] = []

    // Generate data for the last 30 days
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)

      // Start with a base score and add some randomness
      // Also add a general upward trend
      const baseScore = 65 + (30 - i) * 0.5
      const randomVariation = Math.random() * 10 - 5 // Random variation between -5 and 5

      data.push({
        date: date.toISOString().split("T")[0],
        score: Math.min(100, Math.max(0, Math.round(baseScore + randomVariation))),
      })
    }

    return data
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-3 rounded-md shadow-lg backdrop-blur-md">
          <p className="text-sm font-medium text-slate-300 mb-1">{`Date: ${new Date(label).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}</p>
          <p className="text-base font-bold text-purple-400">{`Score: ${payload[0].value}`}</p>
        </div>
      )
    }

    return null
  }

  if (loading) {
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="h-80 group">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            tickFormatter={(value) => {
              const date = new Date(value)
              return `${date.getDate()}/${date.getMonth() + 1}`
            }}
            tick={{ fill: "#94a3b8" }}
            axisLine={{ stroke: "#475569" }}
          />
          <YAxis
            domain={[0, 100]}
            stroke="#94a3b8"
            tick={{ fill: "#94a3b8" }}
            axisLine={{ stroke: "#475569" }}
            tickLine={{ stroke: "#475569" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="score"
            stroke="url(#colorScore)"
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{ r: 6, fill: "#a855f7", stroke: "#1e293b", strokeWidth: 2 }}
            isAnimationActive={!animationComplete}
            animationDuration={1500}
            animationEasing="ease-in-out"
            className="group-hover:opacity-90 transition-opacity duration-300"
          />
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

