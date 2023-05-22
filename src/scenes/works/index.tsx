import { data } from "./data"
import Item from "./items"

const Works = () => {
  return (
    <div  id="projects">
      {
        data.map((item) => {
          return (
            <Item item={item} key={item.id}/>
          )
        })
      }
    </div>
  )
}

export default Works