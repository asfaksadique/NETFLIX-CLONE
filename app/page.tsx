import { MovieRow } from "@/components/movie-row"
import { Navbar } from "@/components/navbar"
import { FeaturedMovie } from "@/components/featured-movie"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <FeaturedMovie />

        <div className="px-4 md:px-8 pb-10 -mt-10 md:-mt-24 relative z-10">
          <MovieRow title="Trending Now" category="trending" />

          <MovieRow title="Popular on Netflix" category="popular" />

          <MovieRow title="Action Movies" category="action" />

          <MovieRow title="Comedies" category="comedy" />

          <MovieRow title="Horror Movies" category="horror" />
        </div>
      </main>
    </div>
  )
}
