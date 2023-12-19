import { createContext } from "react";
import { Anime } from "../model/Anime";
import { ListAnime } from "../model/List_anime";

type GlobalContextType = {
  anime: Anime | null;
  listAnime: ListAnime | null;
  loading: boolean;
  currentPage: number;
  query: string;
  setAnime: (newAnime: Anime | null) => void;
  setListAnime: (listAnime: ListAnime | null) => void;
  setLoading: (loading: boolean) => void;
  setCurrentPage: (currentPage: number) => void;
  setQuery: (query: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);



export default GlobalContext;