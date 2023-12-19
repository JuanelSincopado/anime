import { useGlobalContext } from "../../context/UseGlobalContext";
import { Anime } from "../../model/Anime";
import ButtonPage from "../page/Button_page";
import Card from "./Card";
import "./card.css"

const ListCard = () => {

  const { query, loading, listAnime } = useGlobalContext()

  if (loading == true) return (
    <div className="loader_container">
      <span className="loader"></span>
    </div>
  )

  if (listAnime && listAnime.data.length > 0) {
    return (
      <>
        <div className="list_card__container">
          {
            listAnime?.data.map((anime: Anime) => {
              return <Card key={anime.mal_id} anime={anime} />
            })
          }

        </div>
        <ButtonPage />
      </>
    )
  } else {
    return (
      <h1 className="not_found"> "{query}" not found </h1>
    )
  }
}

export default ListCard;