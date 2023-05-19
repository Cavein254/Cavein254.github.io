import useScreenWidth from "@/hooks/useScreenWidth";
import { SelectedPage } from "@/shared/types";
import { MdHeader, SmHeader, XsHeader } from "./header";

type Props = {
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage) => void,
}

function NavBar({selectedPage, setSelectedPage}:Props) {

  
  const size:number = useScreenWidth();
  
  return (
    <nav>
      {(() => {
        if (size <= 480) {
          return (
            <>
            <XsHeader />
            </>
          )
        } else if (size > 480 && size <= 768) {
          return (
            <SmHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          )
        } else {
          return (
            <MdHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          )
        }
      })()}
    </nav>
  )
}

export default NavBar
