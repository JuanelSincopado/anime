import { useGlobalContext } from "../../context/UseGlobalContext";
import "./button_page.css";

const ButtonPage = () => {

  const {
    currentPage,
    listAnime,
    setCurrentPage,
    setLoading
  } = useGlobalContext()

  const nextPage = () => {
    if (currentPage == listAnime?.pagination.last_visible_page) return
    setLoading(true)
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage == 1) return
    setLoading(true)
    setCurrentPage(currentPage - 1)
  }

  const firstPage = () => {
    if (currentPage == 1) return
    setLoading(true)
    setCurrentPage(1)
  }

  const lastPage = () => {
    if (currentPage == listAnime?.pagination.last_visible_page) return
    setLoading(true)
    setCurrentPage(listAnime != null && listAnime?.pagination.last_visible_page ? listAnime?.pagination.last_visible_page : 1)
  }

  return (
    <div className="button_page__container">
      <button
        className={currentPage == 1 ? "btn disabled" : "btn eneable"}
        onClick={() => prevPage()}
      > &lt; </button>

      {currentPage == 1 ?
        null :
        (
          <div className="btn_text__container">
            <button className="btn_text" onClick={() => firstPage()}>1</button>
            <p>...</p>
          </div>
        )
      }

      <p>{currentPage} / {listAnime?.pagination.last_visible_page} </p>

      {
        currentPage == listAnime?.pagination.last_visible_page ?
          null :
          (
            <div className="btn_text__container">
              <p>...</p>
              <button className="btn_text" onClick={() => lastPage()}>
                {listAnime != null && listAnime?.pagination.last_visible_page ? listAnime?.pagination.last_visible_page : null}
              </button>
            </div>
          )
      }

      <button
        className={
          currentPage == listAnime?.pagination.last_visible_page ?
            "btn disabled" :
            "btn eneable"
        }
        onClick={() => nextPage()}
      > &gt; </button>
    </div>
  );
}

export default ButtonPage;