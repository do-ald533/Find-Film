type Genre = {
  name: string;
};

export type Film = {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  genres: Genre[];
  original_title: string;
  original_language: string;
};

export type Films = {
  results: Film[];
};
