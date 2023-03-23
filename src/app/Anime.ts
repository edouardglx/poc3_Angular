export interface Anime {
  _id: number;
  title: string;
  alternativeTitles?: string[];
  ranking?: number;
  genres?: string[];
  episodes?: number;
  hasEpisode?: boolean;
  hasRanking?: boolean;
  image: string;
  link?: string;
  status?: string;
  synopsis?: string;
  thumb?: string;
  type?: string;
}
