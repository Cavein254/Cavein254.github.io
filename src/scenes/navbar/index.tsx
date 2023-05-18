import useMediaQuery from "@/hooks/useScreenSize";
import useScreenWidth from "@/hooks/useScreenWidth";
import { MdHeader, SmHeader, XsHeader } from "./header";

function NavBar() {
  const flexBetween = "flex justify-center items-center";
  const isAboveSmallScreen = useMediaQuery("(min-width:480px)");
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const screen = window.screen.width;
  
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
