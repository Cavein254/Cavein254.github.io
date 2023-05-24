import { data } from "./data"
import Item from "./items"

const Works = () => {
  return (
    <div  id="projects" className="pt-8 mb-4">
      <div>
        <h4 className="text-secondary-200 text-[2rem] font-bold text-center">My Works</h4>
    </div>
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