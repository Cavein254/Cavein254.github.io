import { SelectedPage } from '@/shared/types'
import Link from './Link'

type Props = {
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void,
}
export const NavigationLinks = ({selectedPage, setSelectedPage}:Props) => {
     return (
        <>
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
        </>
    )
}