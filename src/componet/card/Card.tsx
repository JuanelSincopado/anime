import { useGlobalContext } from "../../context/UseGlobalContext";
import { Anime } from "../../model/Anime";

type Prop = {
  anime: Anime
}

const Card = ({ anime }: Prop) => {

  const { setAnime } = useGlobalContext()

  return (
    <div className="card" onClick={() => setAnime(anime)}>
      <img
        className="card__image"
        src={anime.images['jpg'].large_image_url}
        alt={anime.title}
        loading="lazy"
      />
      <p className="card__title">{anime.title}</p>
    </div>
  );
}

export default Card;