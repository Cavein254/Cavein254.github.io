import useScreenWidth from "@/hooks/useScreenWidth";
import { MdHeader, SmHeader, XsHeader } from "./header";

function NavBar() {

  
  const size = useScreenWidth();
  
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
            <SmHeader />
          )
        } else {
          return (
            <MdHeader />
          )
        }
      })()}
    </nav>
  )
}

export default NavBar
