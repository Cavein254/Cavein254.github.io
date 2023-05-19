import { useState } from "react";
import NavBar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <>
     <NavBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
    </>
  )
}

export default App
