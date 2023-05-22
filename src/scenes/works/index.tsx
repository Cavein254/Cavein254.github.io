import { data } from "./data"
import Item from "./items"

type ItemData = {
  id:number,
  technologies:[],
  url:string,
  description:string,
  pic:string
}


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