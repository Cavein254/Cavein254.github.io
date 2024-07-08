import { data } from "./data";
import Item from "./items";

const Works = () => {
  return (
    <div id="projects" className="mb-4 pt-8">
      <div>
        <h4 className="text-center text-[2rem] font-bold text-secondary-200">
          My Works
        </h4>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap">
        {data.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
