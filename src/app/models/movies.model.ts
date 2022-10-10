export interface Movies {
  page: number,
  results: MoviesInfo[]
}

export interface MoviesInfo {
  genre_ids: [],
  id: number,
  poster_path: string,
  release_date: string,
  title: string,
  vote_count: number,
  vote_average: number,
  popularity: number  
}

export interface MoviesDetail {
  id: number,
  title: string,
  overview: string,
  backdrop_path: string,
  release_date: string,
  runtime: string,
}

export interface MoviesGenre {
  genres: Genre[]
}

export interface Genre {
  id: number,
  name: string
}
