import Home from "@/scenes/home/page";
import { useState } from "react";
import NavBar from "./scenes/navbar";
import Skills from "./scenes/skills";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <>
     <NavBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
     <Home />
     <Skills />
    </>
  )
}

export default App
