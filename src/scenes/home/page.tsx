import ImageLogo from "@/assets/imagelogo.png"
import Image from "@/assets/myimage.png"


const Home = () => {
  return (
    <>
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
    <section>
      <div className="pt-12 sm:flex items-center justify-center">
        <div className="flex justify-center items-center sm:justify-end ">
          <img src={ImageLogo} alt="spinner" className="w-[20%] sm:w-[40%] "/>
        </div>
        <div className="px-16 pt-8">
          <p>A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself.</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home