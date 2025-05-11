"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getMoviesByCategory } from "@/lib/data"
import type { MovieType } from "@/lib/types"

interface MovieRowProps {
  title: string
  category: string
}

export function MovieRow({ title, category }: MovieRowProps) {
  const router = useRouter()
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)

  const movies = getMoviesByCategory(category)

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })

      // Show left arrow only if we've scrolled right
      setShowLeftArrow(scrollTo > 0)
    }
  }

  return (
    <div className="space-y-0.5 md:space-y-2 mb-8">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>

      <div className="group relative md:-ml-2">
        {showLeftArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-0 bottom-0 z-40 m-auto h-9 w-9 opacity-0 group-hover:opacity-100 bg-black/30 hover:bg-black/50"
            onClick={() => handleClick("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        <div
          ref={rowRef}
          className="flex items-center space-x-1 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => (
            <MovieThumbnail key={movie.id} movie={movie} onSelect={() => router.push(`/movies/${movie.id}`)} />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-0 bottom-0 z-40 m-auto h-9 w-9 opacity-0 group-hover:opacity-100 bg-black/30 hover:bg-black/50"
          onClick={() => handleClick("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

interface MovieThumbnailProps {
  movie: MovieType
  onSelect: () => void
}

function MovieThumbnail({ movie, onSelect }: MovieThumbnailProps) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105"
      onClick={onSelect}
    >
      <Image
        src={movie.thumbnailPath || "/placeholder.svg"}
        alt={movie.title}
        fill
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  )
}
