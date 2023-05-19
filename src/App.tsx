import { useState } from "react";
import NavBar from "./scenes/navbar";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <>
     <NavBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
    </>
  )
}

export default App
