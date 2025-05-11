"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Info, Play, Plus, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { getMovieById } from "@/lib/data"
import type { MovieType } from "@/lib/types"

export default function MoviePage({ params }: { params: { id: string } }) {
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
      <Navbar />

      <div className="relative">
        <Button variant="ghost" className="absolute top-4 left-4 z-20 text-white" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="relative h-[70vh] w-full">
          <Image
            src={movie.backdropPath || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <span className="text-green-500 font-semibold">{movie.matchPercentage}% Match</span>
              <span>{movie.releaseYear}</span>
              <span className="border border-gray-600 px-1">{movie.maturityRating}</span>
              <span>{movie.duration}</span>
            </div>

            <p className="text-gray-300 mb-6">{movie.overview}</p>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-black hover:bg-gray-200">
                <Play className="mr-2 h-4 w-4" />
                Play
              </Button>
              <Button variant="secondary">
                <Plus className="mr-2 h-4 w-4" />
                My List
              </Button>
              <Button variant="secondary">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Rate
              </Button>
              <Button variant="secondary">
                <Info className="mr-2 h-4 w-4" />
                More Info
              </Button>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-16">
          <h2 className="text-xl font-semibold mb-4">About {movie.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                <span className="text-gray-500">Director: </span>
                {movie.director}
              </p>
              <p className="text-gray-400 mb-4">
                <span className="text-gray-500">Cast: </span>
                {movie.cast.join(", ")}
              </p>
              <p className="text-gray-400 mb-4">
                <span className="text-gray-500">Genres: </span>
                {movie.genres.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">More Like This</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.similar.map((similarId) => (
                  <SimilarMovieCard key={similarId} id={similarId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SimilarMovieCard({ id }: { id: string }) {
  const movie = getMovieById(id)
  const router = useRouter()

  if (!movie) return null

  return (
    <div
      className="relative aspect-video cursor-pointer hover:scale-105 transition-transform"
      onClick={() => router.push(`/movies/${id}`)}
    >
      <Image src={movie.thumbnailPath || "/placeholder.svg"} alt={movie.title} fill className="object-cover rounded" />
    </div>
  )
}
