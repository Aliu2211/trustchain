import { AnimatedBackground } from "@/components/animated-background"
import { PasswordResetForm } from "@/components/password-reset-form"
import Link from "next/link"

export default function PasswordResetPage() {
  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
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
            </Link>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <PasswordResetForm />
          </div>
        </div>

        <footer className="border-t border-slate-800 py-4 bg-slate-950/50 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} TrustChain. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

