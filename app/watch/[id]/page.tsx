"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { getMovieById } from "@/lib/data"
import type { MovieType } from "@/lib/types"

export default function WatchPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [movie, setMovie] = useState<MovieType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = getMovieById(params.id)
        setMovie(movieData)
      } catch (error) {
        console.error("Failed to fetch movie:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
        <Button onClick={() => router.push("/")} variant="outline">
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <Button variant="ghost" className="absolute top-4 left-4 z-20 text-white" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Browse
        </Button>

        <VideoPlayer title={movie.title} videoUrl={movie.videoUrl} />
      </div>
    </div>
  )
}
