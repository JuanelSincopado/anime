import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/UseGlobalContext";
import { ListAnime } from "../../model/List_anime";
import "./search.css";
import api from "../../helps/api";

const Search = () => {

  const {
    query,
    currentPage,
    setListAnime,
    setLoading,
    setQuery,
    setCurrentPage
  } = useGlobalContext()

  const [querySearch, setQuerySearch] = useState<string>("");

  const getAnimeAllAnime = async () => {
    try {
      const result: ListAnime = await api("https://api.jikan.moe/v4/anime?q="
        + query
        + "&page="
        + currentPage);
      setListAnime(result);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener anime:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAnimeAllAnime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, currentPage])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()


    if (querySearch === query) return null

    if (querySearch.match(/^[a-zA-Z0-9]+$/) || querySearch === "") {
      setLoading(true)
      setQuery(querySearch)
      setCurrentPage(1)
    } else {
      alert("Only letters and numbers are allowed")
    }
  }


  return (
    <form className="search_container" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type Something..."
        name="query"
        onChange={(e) => setQuerySearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;