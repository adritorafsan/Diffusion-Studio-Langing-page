import Create from "./MainComponents/Create"
import CreativePass from "./MainComponents/CreativePass"
import CreativeSpeed from "./MainComponents/CreativeSpeed"
import Editing from "./MainComponents/Editing"
import EditSurface from "./MainComponents/EditSurface"
import Faq from "./MainComponents/Faq"
import Hero from "./MainComponents/Hero"
import MackBook from "./MainComponents/MackBook"
import Navbar from "./MainComponents/Navbar"


function App() {


  return (
    <>
     <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <EditSurface />
      <CreativePass />
      <Editing />
      <CreativeSpeed />
      <MackBook />
      <Faq />
      <Create />

     </div>
    </>
  )
}

export default App
