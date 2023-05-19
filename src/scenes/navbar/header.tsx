import Logo from '@/assets/logo.png'
import { SelectedPage } from '@/shared/types'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from 'react'
import { NavigationLinks } from './NavigationLinks'

type Props = {
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void,
}

  
export const XsHeader = ({setSelectedPage, selectedPage}:Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div className='flex justify-between items-center my-6 mx-4 '>
            <img src={Logo} alt='logo' className='w-[35%]'/>
        <div>
            <Bars3Icon className='w-[1.8rem]' onClick={()=> setIsMenuToggled(!isMenuToggled)}/>
        </div>
        {isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-full bg-primary-100 pt-6 mx-4 px-6'>
                    <div className='flex justify-between items-center'>
                        <img src={Logo} alt='logo' className='w-[35%]'/>
                        <div>
                            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className='w-[1.8rem]' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center pt-[40%] gap-8 text-3xl'>
                        <NavigationLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                </div>
            )}
    </div>
  )
}

export const SmHeader = ({selectedPage, setSelectedPage}:Props) => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
         <img src={Logo} alt='logo' className='w-[35%]'/>
         <div className='flex justify-around w-full pt-2'>
         <NavigationLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
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
        <NavigationLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
        </div>
     </>
    )
}