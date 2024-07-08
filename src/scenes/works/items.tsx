import { Link } from "react-router-dom";

const Item = ({ item }: any) => {
  return (
    <>
      <div className="mx-auto  min-w-[350px] max-w-[450px]">
        <div className="rounded-md bg-primary-200 px-4 py-2">
          <div>
            <h5 className="text-center font-bold text-secondary-200 ">
              {item.title}
            </h5>
          </div>
          <div>
            <p className="text-center font-thin">{}</p>
          </div>
          <div className="px-4">
            <p>{item.description}</p>
          </div>
          <div className="flex items-center justify-center">
            <Link to={item.url}>
              <button className="rounded-md bg-primary-400 px-8 py-4 ">
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={item.pic} alt="Project image" />
        </div>
      </div>
    </>
  );
};

export default Item;
