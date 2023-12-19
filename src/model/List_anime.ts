import { Anime } from "./Anime";
import { PaginationClass } from "./Pagination";

export interface ListAnime {
  pagination: PaginationClass;
  data: Anime[];
}
