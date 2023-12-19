import { useState } from "react";
import { Anime } from "../model/Anime";
import GlobalContext from "./Context";
import { ListAnime } from "../model/List_anime";

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const GlobalState = ({ children }: Props) => {

  const [anime, setAnime] = useState<Anime | null>(null);
  const [listAnime, setListAnime] = useState<ListAnime | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  return (
    <GlobalContext.Provider value={{
      currentPage, query, anime,
      listAnime, loading, setQuery, setCurrentPage, setAnime,
      setListAnime, setLoading
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;