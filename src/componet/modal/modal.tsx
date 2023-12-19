import { useEffect } from "react";
import { useGlobalContext } from "../../context/UseGlobalContext";
import { Genre } from "../../model/Anime";
import "./modal.css"

const Modal = () => {

  const { anime, setAnime } = useGlobalContext()

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }

  }, [])

  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className="modal_flex">
          <div className="modal__title_phone">
            <p>{anime?.title}</p>
            <button onClick={() => setAnime(null)} >&times;</button>
          </div>
          <img src={anime?.images['jpg'].large_image_url} alt={anime?.title} />

          <div className="modal_info">
            <div className="modal__title">
              <p>{anime?.title}</p>
              <button onClick={() => setAnime(null)} >&times;</button>
            </div>
            <p className="modal__description">
              {anime?.synopsis}
            </p>
            <p className="modal__type">{anime?.type}</p>
            <div className="modal__generes">
              {anime?.genres.map((genre: Genre) => {
                return <p key={genre.mal_id}>{genre.name}</p>
              })}
            </div>
            <div className="modal__data">
              <p>Episodios: {anime?.episodes}</p>
              <p>Duration: {anime?.duration}</p>
            </div>
            {
              anime && anime.trailer.youtube_id != null ? (
                <div className="modal__trailer">
                  <a
                    href={anime.trailer.url}
                    className="modal__trailer_url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wath the trailer here
                  </a>
                  <iframe src={anime?.trailer.embed_url}></iframe>
                </div>
              ) : (
                <div className="modal__trailer">
                  <p>*Trailer not available*</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;