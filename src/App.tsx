import ListCard from "./componet/card/List_card"
import Header from "./componet/header/Header"
import Modal from "./componet/modal/modal"
import Search from "./componet/search/Search"
import { useGlobalContext } from "./context/UseGlobalContext"

function App() {

  const { anime } = useGlobalContext()

  return (
    <>
      <Header />
      <Search />
      <ListCard />
      {
        anime && <Modal />
      }
    </>
  )
}

export default App
