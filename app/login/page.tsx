"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any credentials
      localStorage.setItem("netflix-user", JSON.stringify({ email }))
      router.push("/")
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="min-h-screen bg-black bg-opacity-60">
        <header className="px-4 py-6">
          <Link href="/">
            <Image
              src="/placeholder.svg?height=80&width=200"
              alt="Netflix"
              width={120}
              height={34}
              className="object-contain"
            />
          </Link>
        </header>

        <main className="flex justify-center items-center px-4">
          <div className="bg-black bg-opacity-80 p-8 rounded-md w-full max-w-md">
            <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

            {error && <div className="bg-red-900 text-white p-3 rounded mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-400">
                  Email or phone number
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-gray-400 text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-gray-400 text-sm hover:underline">
                  Need help?
                </Link>
              </div>
            </form>

            <div className="mt-12">
              <p className="text-gray-500">
                New to Netflix?{" "}
                <Link href="#" className="text-white hover:underline">
                  Sign up now
                </Link>
              </p>

              <p className="text-gray-500 text-sm mt-4">
                This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
