import Logo from '@/assets/logo.png'
import { Bars3Icon } from "@heroicons/react/24/solid"
export const XsHeader = () => {
  return (
    <div className='flex justify-between items-center my-6 mx-4 '>
            <img src={Logo} alt='logo' className='w-[35%]'/>
        <div>
            <Bars3Icon className='w-[1.8rem]'/>
        </div>
    </div>
  )
}

export const SmHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
         <img src={Logo} alt='logo' className='w-[35%]'/>
         <div className='flex justify-around w-full pt-2'>
            <p>About Me</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contacts</p>
         </div>
    </div>
    )
}

export const MdHeader = () => {
    return (
        <>
        <div className='flex my-6 justify-between mx-4'>
            <img src={Logo} alt='logo' className='w-[15%]'/>
        <div className='flex gap-4'>
            <p>About Me</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contacts</p>
        </div>
        </div>
     </>
    )
}