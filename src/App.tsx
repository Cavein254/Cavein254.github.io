import Home from "@/scenes/home/page";
import { useState } from "react";
import Contact from "./scenes/contacts";
import NavBar from "./scenes/navbar";
import Skills from "./scenes/skills";
import Works from "./scenes/works";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <>
     <NavBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
     <Home />
     <Skills />
     <Works />
     <Contact />
    </>
  )
}

export default App
