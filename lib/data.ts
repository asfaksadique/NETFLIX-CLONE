import type { MovieType } from "./types"

// Mock data for our Netflix clone
const movies: MovieType[] = [
  {
    id: "1",
    title: "Stranger Things",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/stranger-things.mp4", // This would be a real video URL in a production app
    releaseYear: "2016",
    maturityRating: "TV-14",
    duration: "4 Seasons",
    matchPercentage: 97,
    genres: ["Sci-Fi", "Horror", "Drama"],
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    similar: ["2", "3", "4"],
  },
  {
    id: "2",
    title: "The Witcher",
    overview:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/the-witcher.mp4",
    releaseYear: "2019",
    maturityRating: "TV-MA",
    duration: "2 Seasons",
    matchPercentage: 95,
    genres: ["Fantasy", "Action", "Adventure"],
    director: "Lauren Schmidt Hissrich",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    similar: ["1", "3", "5"],
  },
  {
    id: "3",
    title: "Breaking Bad",
    overview:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/breaking-bad.mp4",
    releaseYear: "2008",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    matchPercentage: 99,
    genres: ["Crime", "Drama", "Thriller"],
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    similar: ["1", "2", "4"],
  },
  {
    id: "4",
    title: "The Queen's Gambit",
    overview:
      "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/queens-gambit.mp4",
    releaseYear: "2020",
    maturityRating: "TV-MA",
    duration: "Limited Series",
    matchPercentage: 96,
    genres: ["Drama", "Historical"],
    director: "Scott Frank",
    cast: ["Anya Taylor-Joy", "Bill Camp", "Moses Ingram", "Thomas Brodie-Sangster"],
    similar: ["1", "3", "5"],
  },
  {
    id: "5",
    title: "Money Heist",
    overview:
      "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/money-heist.mp4",
    releaseYear: "2017",
    maturityRating: "TV-MA",
    duration: "5 Parts",
    matchPercentage: 93,
    genres: ["Crime", "Drama", "Thriller"],
    director: "Álex Pina",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso"],
    similar: ["2", "3", "4"],
  },
  {
    id: "6",
    title: "The Crown",
    overview:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/the-crown.mp4",
    releaseYear: "2016",
    maturityRating: "TV-MA",
    duration: "4 Seasons",
    matchPercentage: 92,
    genres: ["Drama", "Historical", "Biography"],
    director: "Peter Morgan",
    cast: ["Olivia Colman", "Tobias Menzies", "Helena Bonham Carter", "Josh O'Connor"],
    similar: ["4", "5", "7"],
  },
  {
    id: "7",
    title: "Dark",
    overview:
      "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/dark.mp4",
    releaseYear: "2017",
    maturityRating: "TV-MA",
    duration: "3 Seasons",
    matchPercentage: 94,
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    director: "Baran bo Odar",
    cast: ["Louis Hofmann", "Lisa Vicari", "Maja Schöne", "Oliver Masucci"],
    similar: ["1", "3", "6"],
  },
  {
    id: "8",
    title: "Narcos",
    overview:
      "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/narcos.mp4",
    releaseYear: "2015",
    maturityRating: "TV-MA",
    duration: "3 Seasons",
    matchPercentage: 91,
    genres: ["Crime", "Drama", "Biography"],
    director: "Chris Brancato",
    cast: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook", "Alberto Ammann"],
    similar: ["3", "5", "9"],
  },
  {
    id: "9",
    title: "Black Mirror",
    overview:
      "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/black-mirror.mp4",
    releaseYear: "2011",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    matchPercentage: 98,
    genres: ["Sci-Fi", "Drama", "Thriller"],
    director: "Charlie Brooker",
    cast: ["Daniel Kaluuya", "Bryce Dallas Howard", "Anthony Mackie", "Miley Cyrus"],
    similar: ["1", "3", "7"],
  },
  {
    id: "10",
    title: "The Umbrella Academy",
    overview:
      "A dysfunctional family of adopted sibling superheroes reunites to solve the mystery of their father's death and the threat of an impending apocalypse.",
    backdropPath: "/placeholder.svg?height=1080&width=1920",
    thumbnailPath: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/videos/umbrella-academy.mp4",
    releaseYear: "2019",
    maturityRating: "TV-14",
    duration: "3 Seasons",
    matchPercentage: 90,
    genres: ["Action", "Adventure", "Comedy"],
    director: "Steve Blackman",
    cast: ["Elliot Page", "Tom Hopper", "David Castañeda", "Emmy Raver-Lampman"],
    similar: ["1", "2", "9"],
  },
]

// Categories for our movie rows
const categories = {
  trending: ["1", "2", "5", "7", "9"],
  popular: ["3", "4", "6", "8", "10"],
  action: ["2", "5", "7", "10"],
  comedy: ["1", "4", "10"],
  horror: ["1", "7", "9"],
}

// Get a movie by ID
export function getMovieById(id: string): MovieType | null {
  return movies.find((movie) => movie.id === id) || null
}

// Get movies by category
export function getMoviesByCategory(category: string): MovieType[] {
  const categoryIds = categories[category as keyof typeof categories] || []
  return categoryIds.map((id) => getMovieById(id)).filter(Boolean) as MovieType[]
}

// Get a featured movie for the hero section
export function getFeaturedMovie(): MovieType {
  // For demo purposes, always return the first movie as featured
  return movies[0]
}
