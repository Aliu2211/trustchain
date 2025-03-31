"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type DApp = {
  id: string
  name: string
  category: "dao" | "defi" | "social" | "nft" | "gaming"
  description: string
  benefits: string[]
  minScore: number
  connected: boolean
  logo: string
}

export function DAppsIntegration() {
  const [dapps, setDapps] = useState<DApp[]>([
    {
      id: "openchat",
      name: "OpenChat",
      category: "social",
      description: "Decentralized messaging platform on the Internet Computer",
      benefits: ["Verified user badge", "Access to exclusive channels", "Increased message visibility"],
      minScore: 65,
      connected: true,
      logo: "chat",
    },
    {
      id: "dscvr",
      name: "DSCVR",
      category: "social",
      description: "Decentralized social media platform for Web3",
      benefits: ["Verified creator status", "Content promotion", "Moderation privileges"],
      minScore: 70,
      connected: true,
      logo: "globe",
    },
    {
      id: "icpdex",
      name: "ICP DEX",
      category: "defi",
      description: "Decentralized exchange for ICP and other tokens",
      benefits: ["Reduced trading fees", "Higher withdrawal limits", "Early access to new pairs"],
      minScore: 75,
      connected: false,
      logo: "bar-chart",
    },
    {
      id: "icplend",
      name: "ICP Lend",
      category: "defi",
      description: "Lending and borrowing protocol on the Internet Computer",
      benefits: ["Lower collateral requirements", "Better interest rates", "Extended loan durations"],
      minScore: 80,
      connected: false,
      logo: "landmark",
    },
    {
      id: "icpdao",
      name: "ICP DAO",
      category: "dao",
      description: "DAO governance platform for ICP projects",
      benefits: ["Boosted voting power", "Proposal creation rights", "Treasury management access"],
      minScore: 72,
      connected: true,
      logo: "vote",
    },
    {
      id: "nftanvil",
      name: "NFT Anvil",
      category: "nft",
      description: "NFT marketplace on the Internet Computer",
      benefits: ["Verified creator badge", "Lower marketplace fees", "Featured collections"],
      minScore: 68,
      connected: false,
      logo: "image",
    },
  ])

  const toggleConnection = (id: string) => {
    setDapps(dapps.map((dapp) => (dapp.id === id ? { ...dapp, connected: !dapp.connected } : dapp)))
  }

  const getCategoryIcon = (category: DApp["category"]) => {
    switch (category) {
      case "dao":
        return (
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
            className="text-indigo-400"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="M14.5 4h-5L7 12l2.5 8h5l2.5-8-2.5-8Z" />
          </svg>
        )
      case "defi":
        return (
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
            className="text-emerald-400"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        )
      case "social":
        return (
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
            className="text-violet-400"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        )
      case "nft":
        return (
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
            className="text-amber-400"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        )
      case "gaming":
        return (
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
            className="text-red-400"
          >
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <path d="M6 12h4" />
            <path d="M8 10v4" />
            <path d="M15 13v.01" />
            <path d="M18 11v.01" />
          </svg>
        )
    }
  }

  const getLogo = (logo: string) => {
    switch (logo) {
      case "chat":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        )
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
      case "bar-chart":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
          </svg>
        )
      case "landmark":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="22" y2="22" />
            <line x1="6" x2="6" y1="18" y2="11" />
            <line x x2="21" y1="22" y2="22" />
            <line x1="6" x2="6" y1="18" y2="11" />
            <line x1="10" x2="10" y1="18" y2="11" />
            <line x1="14" x2="14" y1="18" y2="11" />
            <line x1="18" x2="18" y1="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
          </svg>
        )
      case "vote":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 12 2 2 4-4" />
            <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
            <path d="M22 19H2" />
          </svg>
        )
      case "image":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        )
    }
  }

  const getCategoryColor = (category: DApp["category"]) => {
    switch (category) {
      case "dao":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
      case "defi":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      case "social":
        return "bg-violet-500/20 text-violet-300 border-violet-500/30"
      case "nft":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30"
      case "gaming":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const categories = ["all", "dao", "defi", "social", "nft", "gaming"] as const

  const [integrationStats, setIntegrationStats] = useState({
    totalDapps: 12,
    connected: 3,
    reputationUsage: 65,
    popularCategory: "social",
  })

  return (
    <div>
      <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 mb-6">
        <h4 className="text-base font-semibold text-white mb-4">Integration Overview</h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            <div className="text-xs text-slate-400 mb-1">Total dApps</div>
            <div className="text-lg font-bold text-white">{integrationStats.totalDapps}</div>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            <div className="text-xs text-slate-400 mb-1">Connected</div>
            <div className="text-lg font-bold text-indigo-400">{integrationStats.connected}</div>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            <div className="text-xs text-slate-400 mb-1">Reputation Usage</div>
            <div className="text-lg font-bold text-emerald-400">{integrationStats.reputationUsage}%</div>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            <div className="text-xs text-slate-400 mb-1">Popular Category</div>
            <div className="text-lg font-bold text-violet-400 capitalize">{integrationStats.popularCategory}</div>
          </div>
        </div>

        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-md p-3">
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
              className="text-indigo-400 mt-0.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <div>
              <h5 className="text-sm font-medium text-white mb-1">Integration Recommendation</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Based on your reputation score of 78, you qualify for premium features on 9 out of 12 dApps. Connecting
                to ICP DEX and ICP Lend would maximize your reputation benefits with reduced fees and higher limits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dapps
                .filter((dapp) => category === "all" || dapp.category === category)
                .map((dapp) => (
                  <div
                    key={dapp.id}
                    className={`bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 flex flex-col ${
                      dapp.connected ? "shadow-md shadow-indigo-500/5" : ""
                    } hover:bg-slate-800/80 transition-colors`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${getCategoryColor(dapp.category)} flex items-center justify-center shadow-sm`}
                        >
                          {getLogo(dapp.logo)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{dapp.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                            {getCategoryIcon(dapp.category)}
                            <span className="capitalize">{dapp.category}</span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={dapp.connected ? "default" : "outline"}
                        className={dapp.connected ? "bg-emerald-500 text-white" : "text-slate-400 border-slate-600"}
                      >
                        {dapp.connected ? "Connected" : "Not Connected"}
                      </Badge>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{dapp.description}</p>

                    <div className="mb-4 bg-slate-900/50 p-3 rounded-md border border-slate-800/50">
                      <div className="text-xs text-slate-400 mb-2 font-medium">Benefits:</div>
                      <ul className="text-xs text-slate-300 list-disc pl-5 space-y-1.5">
                        {dapp.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>Minimum Score Required:</span>
                      <span className="font-medium text-white">{dapp.minScore}/100</span>
                    </div>
                    <Progress
                      value={78}
                      max={100}
                      className="h-2 mb-4 bg-slate-700"
                      indicatorClassName={`${dapp.minScore <= 78 ? "bg-emerald-500" : "bg-amber-500"}`}
                    />

                    <div className="mt-auto">
                      <Button
                        variant={dapp.connected ? "destructive" : "default"}
                        size="sm"
                        className={`w-full ${!dapp.connected && "bg-indigo-600 hover:bg-indigo-700"}`}
                        onClick={() => toggleConnection(dapp.id)}
                      >
                        {dapp.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

