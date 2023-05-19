import Logo from '@/assets/logo.png'
import { SelectedPage } from '@/shared/types'
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from './Link'

type Props = {
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void,
}
  
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

export const SmHeader = ({selectedPage, setSelectedPage}:Props) => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
         <img src={Logo} alt='logo' className='w-[35%]'/>
         <div className='flex justify-around w-full pt-2'>
         <Link 
            page="About Me"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Contracts"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
         </div>
    </div>
    )
}

export const MdHeader = ({selectedPage, setSelectedPage}:Props) => {
    return (
        <>
        <div className='flex my-6 justify-between mx-4'>
            <img src={Logo} alt='logo' className='w-[15%]'/>
        <div className='flex gap-4'>
            <Link 
            page="About Me"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page="Contracts"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
        </div>
        </div>
     </>
    )
}