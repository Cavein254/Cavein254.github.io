import useMediaQuery from "@/hooks/useScreenSize";
import useScreenWidth from "@/hooks/useScreenWidth";

function NavBar() {
  const flexBetween = "flex justify-center items-center";
  const isAboveSmallScreen = useMediaQuery("(min-width:480px)");
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const screen = window.screen.width;
  
  const size = useScreenWidth();
  
  return (
    <nav>
      {(() => {
        if (size <= 300) {
          return (
            <div>someCase 300</div>
          )
        } else if (size > 300 && size <= 768) {
          return (
            <div>otherCase 768</div>
          )
        } else {
          return (
            <div>catch 768 above</div>
          )
        }
      })()}
    </nav>
  )
}

export default NavBar
