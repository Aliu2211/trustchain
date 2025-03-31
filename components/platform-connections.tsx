"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Platform = {
  id: string
  name: string
  icon: string
  connected: boolean
  lastSync: string | null
  contribution: number
}

export function PlatformConnections() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: "github",
      name: "GitHub",
      icon: "github",
      connected: true,
      lastSync: "2023-06-15T14:32:00Z",
      contribution: 35,
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "twitter",
      connected: true,
      lastSync: "2023-06-14T09:15:00Z",
      contribution: 15,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "linkedin",
      connected: false,
      lastSync: null,
      contribution: 0,
    },
    {
      id: "discord",
      name: "Discord",
      icon: "message-square",
      connected: true,
      lastSync: "2023-06-13T11:45:00Z",
      contribution: 20,
    },
  ])

  const [visiblePlatforms, setVisiblePlatforms] = useState<Platform[]>([])

  useEffect(() => {
    // Animate platforms appearing one by one
    platforms.forEach((platform, index) => {
      setTimeout(() => {
        setVisiblePlatforms((prev) => [...prev, platform])
      }, index * 150)
    })
  }, [platforms])

  const toggleConnection = (id: string) => {
    setPlatforms(
      platforms.map((platform) =>
        platform.id === id
          ? {
              ...platform,
              connected: !platform.connected,
              lastSync: platform.connected ? null : new Date().toISOString(),
            }
          : platform,
      ),
    )
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never"

    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
    }
  }

  const getIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return (
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        )
      case "twitter":
        return (
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      case "linkedin":
        return (
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case "message-square":
        return (
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )
      default:
        return (
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
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        )
    }
  }

  const getPlatformColor = (id: string) => {
    switch (id) {
      case "github":
        return "bg-fuchsia-500/20 text-fuchsia-400"
      case "twitter":
        return "bg-purple-500/20 text-purple-400"
      case "linkedin":
        return "bg-sky-500/20 text-sky-400"
      case "discord":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-slate-500/20 text-slate-400"
    }
  }

  return (
    <div className="space-y-4">
      {visiblePlatforms.map((platform, index) => (
        <div
          key={platform.id}
          className={`flex items-center justify-between p-4 rounded-lg ${
            platform.connected
              ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80"
              : "bg-slate-900/50 border border-slate-800/50"
          } transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 group`}
          style={{
            opacity: 0,
            animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                platform.connected ? getPlatformColor(platform.id) : "bg-slate-700/50 text-slate-400"
              } shadow-sm group-hover:scale-110 transition-transform duration-300`}
            >
              {getIcon(platform.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {platform.name}
                </h4>
                {platform.connected && (
                  <Badge variant="outline" className="text-xs bg-purple-500/10 text-purple-400 border-purple-500/30">
                    Connected
                  </Badge>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Last sync:{" "}
                <span className={platform.connected ? "text-slate-300" : ""}>{formatDate(platform.lastSync)}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {platform.connected && (
              <div className="text-sm font-medium text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                +{platform.contribution}%
              </div>
            )}
            <Button
              variant={platform.connected ? "outline" : "default"}
              size="sm"
              className={
                platform.connected
                  ? "border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 transition-all duration-300"
                  : "bg-purple-600 hover:bg-purple-700 transition-all duration-300"
              }
              onClick={() => toggleConnection(platform.id)}
            >
              {platform.connected ? "Disconnect" : "Connect"}
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        className="w-full mt-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-[1.02] transform"
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
          className="mr-2"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Connect More Platforms
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

