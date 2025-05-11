export interface MovieType {
  id: string
  title: string
  overview: string
  backdropPath: string
  thumbnailPath: string
  videoUrl: string
  releaseYear: string
  maturityRating: string
  duration: string
  matchPercentage: number
  genres: string[]
  director: string
  cast: string[]
  similar: string[]
}
