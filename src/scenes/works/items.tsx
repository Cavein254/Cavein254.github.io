import Card from "@/assets/card_portfolio.png"

type Data = {
    id:number,
    technologies:[],
    url:string,
    description:string,
    pic:string
  }

const Item = ({data}: Data) => {
    console.log("print description")
    console.log(data.description)
  return (
    <>
    <div>
        <h4 className="text-secondary text-center font-bold">My Works</h4>
    </div>
    <div>
        <div className="px-4 py-2 bg-primary-200 rounded-md mx-6">
            <div>
                <h5 className="text-secondary-200 text-center font-bold ">News Blog</h5>
            </div>
            <div>
                <p className="text-center font-thin">HTML, CSS, JS</p>
            </div>
            <div className="px-4">
                <p>{data.description}</p>
            </div>
            <div className="flex justify-center items-center">
            <button className="px-8 py-4 bg-primary-400 rounded-md ">
                See More
            </button>
            </div>
        </div>
        <div className="flex justify-center">
            <img src={Card} />
        </div>
    </div>
    </>
  )
}

export default Item