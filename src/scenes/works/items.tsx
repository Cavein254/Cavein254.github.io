
const Item = ({item}:any) => {
    
  return (
    <>
    
    <div>
        <div className="px-4 py-2 bg-primary-200 rounded-md mx-6">
            <div>
                <h5 className="text-secondary-200 text-center font-bold ">{item.title}</h5>
            </div>
            <div>
                <p className="text-center font-thin">
                    {
                        
                    }
                </p>
            </div>
            <div className="px-4">
                <p>{item.description}</p>
            </div>
            <div className="flex justify-center items-center">
            <button className="px-8 py-4 bg-primary-400 rounded-md ">
                See More
            </button>
            </div>
        </div>
        <div className="flex justify-center">
            <img src={item.pic} />
        </div>
    </div>
    </>
  )
}

export default Item