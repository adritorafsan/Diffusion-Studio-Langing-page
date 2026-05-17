import EditSurface from "./MainComponents/EditSurface"
import Hero from "./MainComponents/Hero"
import Navbar from "./MainComponents/Navbar"


function App() {


  return (
    <>
     <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <EditSurface />
     </div>
    </>
  )
}

export default App
