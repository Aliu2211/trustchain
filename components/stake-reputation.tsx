"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

type StakingOption = {
  id: string
  title: string
  description: string
  platform: string
  minScore: number
  benefits: string[]
  duration: string
  risk: "low" | "medium" | "high"
}

export function StakeReputation() {
  const [stakeAmount, setStakeAmount] = useState(20)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const stakingOptions: StakingOption[] = [
    {
      id: "dao-voting",
      title: "DAO Voting Power",
      description: "Boost your voting power in participating DAOs",
      platform: "OpenChat DAO",
      minScore: 60,
      benefits: [
        "2x voting power in governance proposals",
        "Ability to create proposals with less token requirements",
        "Priority in community discussions",
      ],
      duration: "30 days",
      risk: "low",
    },
    {
      id: "defi-collateral",
      title: "DeFi Collateral Reduction",
      description: "Reduce collateral requirements for loans",
      platform: "ICP DeFi Protocol",
      minScore: 70,
      benefits: [
        "Up to 20% reduction in collateral requirements",
        "Lower interest rates on loans",
        "Priority liquidation protection",
      ],
      duration: "14 days",
      risk: "medium",
    },
    {
      id: "developer-access",
      title: "Developer Program Access",
      description: "Gain access to exclusive developer resources",
      platform: "ICP Developer Hub",
      minScore: 75,
      benefits: [
        "Early access to beta features",
        "Dedicated technical support",
        "Increased canister cycles allocation",
      ],
      duration: "60 days",
      risk: "low",
    },
    {
      id: "social-verification",
      title: "Social Verification Badge",
      description: "Verified status across ICP social platforms",
      platform: "DSCVR & OpenChat",
      minScore: 80,
      benefits: [
        "Verified badge on your profile",
        "Increased visibility in discussions",
        "Access to verified-only channels",
      ],
      duration: "90 days",
      risk: "high",
    },
  ]

  const handleStake = () => {
    // This would connect to the ICP canister in a real implementation
    alert(`Staked ${stakeAmount} reputation points for ${selectedOption}`)
  }

  const getRiskColor = (risk: StakingOption["risk"]) => {
    switch (risk) {
      case "low":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
      case "medium":
        return "text-amber-400 bg-amber-500/10 border-amber-500/30"
      case "high":
        return "text-red-400 bg-red-500/10 border-red-500/30"
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <Alert className="bg-indigo-500/10 border-indigo-500/30">
        <InfoIcon className="h-5 w-5 text-indigo-400" />
        <AlertTitle className="text-white font-semibold">About Reputation Staking</AlertTitle>
        <AlertDescription className="text-slate-300">
          Staking your reputation allows you to access special benefits across the ICP ecosystem. Your reputation is
          temporarily locked during the staking period and will be returned unless you violate platform rules.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
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
              <h4 className="text-sm font-semibold text-white">Current Stakes</h4>
              <p className="text-xs text-slate-400">Active reputation commitments</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-2">2</div>
          <div className="text-xs text-slate-400">
            Total staked: <span className="text-indigo-400 font-medium">25 points</span>
          </div>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
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
                <path d="M12 22V8" />
                <path d="m5 12 7-4 7 4" />
                <path d="M5 16l7-4 7 4" />
                <path d="M5 20l7-4 7 4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Rewards Earned</h4>
              <p className="text-xs text-slate-400">Benefits from staking</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-400 mb-2">+15%</div>
          <div className="text-xs text-slate-400">
            Across <span className="text-white font-medium">3 platforms</span>
          </div>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Next Release</h4>
              <p className="text-xs text-slate-400">Reputation returning to pool</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-2">5 days</div>
          <div className="text-xs text-slate-400">
            <span className="text-indigo-400 font-medium">10 points</span> from DAO Voting
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50 shadow-inner">
        <h3 className="text-lg font-semibold text-white mb-4">Available Reputation: 78</h3>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-slate-300 font-medium">Stake Amount</span>
              <span className="text-sm font-semibold text-indigo-400">{stakeAmount} points</span>
            </div>
            <Slider
              value={[stakeAmount]}
              min={5}
              max={50}
              step={5}
              onValueChange={(value) => setStakeAmount(value[0])}
              className="py-2"
            />
          </div>
          <div className="flex justify-between text-sm p-3 bg-slate-900/50 rounded-md border border-slate-800/50">
            <span className="text-slate-400">Available after staking:</span>
            <span className="font-semibold text-white">{78 - stakeAmount} points</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stakingOptions.map((option) => (
          <Card
            key={option.id}
            className={`bg-slate-800/50 border-slate-700/50 cursor-pointer transition-all hover:bg-slate-800/80 ${
              selectedOption === option.id ? "ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/10" : ""
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base text-white">{option.title}</CardTitle>
                <Badge variant="outline" className={`${getRiskColor(option.risk)}`}>
                  {option.risk} risk
                </Badge>
              </div>
              <CardDescription className="text-slate-300">{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-slate-400 mb-2">
                Platform: <span className="text-slate-300 font-medium">{option.platform}</span>
              </div>
              <div className="text-xs text-slate-400 mb-2">
                Min. Score Required: <span className="text-slate-300 font-medium">{option.minScore}</span>
              </div>
              <div className="text-xs text-slate-400 mb-2">Benefits:</div>
              <ul className="text-xs text-slate-300 list-disc pl-5 space-y-1.5">
                {option.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full flex justify-between items-center">
                <span className="text-xs text-slate-400">
                  Duration: <span className="text-slate-300 font-medium">{option.duration}</span>
                </span>
                {selectedOption === option.id && (
                  <Button
                    size="sm"
                    onClick={handleStake}
                    disabled={stakeAmount <= 0}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Stake Now
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

