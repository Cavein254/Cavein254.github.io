import Image from "@/assets/myimage.png"
// import ImageLogo from "@/assets/imagelogo.png"

type Props = {}

const Home = (props: Props) => {
  return (
    <section>
      <div className="md:flex mt-[15%] ">
        <div className="flex justify-center items-center  mx-auto">
          <div className="flex justify-center items-left flex-col m-6">
            <h1 className="text-[2.5rem] text-secondary-200 font-extrabold">John Muthua</h1>
            <h3 className="font-bold text-[1.5rem]">FullStack Web Developer</h3>
            <h6 className="text-[1.2rem] font-light">A fullstack developer delivering quality products to clients</h6>
          </div>
        </div>
        <div className="flex justify-center items-center bg-logo bg-no-repeat mx-auto">
          <div className="flex justify-center items-center py-16">
            <img src={Image} alt="my Image" className="w-[75%]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home