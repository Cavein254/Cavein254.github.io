import ImageLogo from "@/assets/imagelogo.png"
import Image from "@/assets/myimage.png"


const Home = () => {
  return (
    <>
    <section>
      <div className="md:flex mt-[15%] md:mt-[8%] sm:mt-[10%]">
        <div className="flex justify-center items-center  mx-auto">
          <div className="flex justify-center items-left flex-col m-6">
            <h1 className="text-[2.5rem] text-secondary-200 font-extrabold">John Muthua</h1>
            <h3 className="font-bold text-[1.5rem]">FullStack Web Developer</h3>
            <h6 className="text-[1.2rem] font-light">Building End-to-End Web Solutions for Seamless Digital Experiences</h6>
          </div>
        </div>
        <div className="flex justify-center items-center bg-logo bg-no-repeat mx-auto bg-center bg-containgit">
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
        <div id="aboutme" className="px-16 pt-8">
          <p>Whether it's designing robust architectures, writing clean and maintainable code, or optimizing application performance, I am dedicated to delivering exceptional results. I thrive in challenging environments and embrace new challenges that push the boundaries of my skills.</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home