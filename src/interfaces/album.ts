export interface Album {
  id: string;
  title: string;
  cover: string;
  artist: string;
  review?: string | null;
  rating?: number | null;
  releaseDate: Date;
  link: string;
  type: AlbumType;
}

export type AlbumType = "SINGLE" | "EP" | "LP" | "COMPILATION" | "MIXTAPE";
