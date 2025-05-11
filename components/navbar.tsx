"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bell, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState<{ email: string } | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Check if user is logged in
    const storedUser = localStorage.getItem("netflix-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log("Searching for:", searchQuery)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("netflix-user")
    setUser(null)
    router.push("/login")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 px-4 md:px-8 py-2 flex items-center justify-between ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/placeholder.svg?height=80&width=200"
            alt="Netflix"
            width={100}
            height={28}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white text-sm hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-gray-300 text-sm hover:text-white">
            TV Shows
          </Link>
          <Link href="#" className="text-gray-300 text-sm hover:text-white">
            Movies
          </Link>
          <Link href="#" className="text-gray-300 text-sm hover:text-white">
            New & Popular
          </Link>
          <Link href="#" className="text-gray-300 text-sm hover:text-white">
            My List
          </Link>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white">
              Browse <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">TV Shows</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Movies</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">New & Popular</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">My List</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-4">
        {isSearchOpen ? (
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Titles, people, genres"
              className="bg-black/80 border-white/20 text-white w-[200px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              onBlur={() => {
                if (!searchQuery) setIsSearchOpen(false)
              }}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </form>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="text-white">
            <Search className="h-5 w-5" />
          </Button>
        )}

        <Button variant="ghost" size="icon" className="text-white">
          <Bell className="h-5 w-5" />
        </Button>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 h-8 w-8 rounded-sm">
                <Avatar className="h-8 w-8 rounded-sm">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="rounded-sm bg-red-600">
                    {user.email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="#">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Help Center</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Sign out of Netflix</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="outline" size="sm" className="text-white border-white" onClick={() => router.push("/login")}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
