"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Info, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getFeaturedMovie } from "@/lib/data"

export function FeaturedMovie() {
  const router = useRouter()
  const movie = getFeaturedMovie()

  return (
    <div className="relative h-[80vh] w-full">
      <Image src={movie.backdropPath || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>

      <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
          <span className="text-green-500 font-semibold">{movie.matchPercentage}% Match</span>
          <span>{movie.releaseYear}</span>
          <span className="border border-gray-600 px-1">{movie.maturityRating}</span>
          <span>{movie.duration}</span>
        </div>

        <p className="text-gray-300 mb-6 line-clamp-3 md:line-clamp-none">{movie.overview}</p>

        <div className="flex gap-3">
          <Button className="bg-white text-black hover:bg-gray-200" onClick={() => router.push(`/watch/${movie.id}`)}>
            <Play className="mr-2 h-4 w-4" />
            Play
          </Button>
          <Button variant="secondary" onClick={() => router.push(`/movies/${movie.id}`)}>
            <Info className="mr-2 h-4 w-4" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}
