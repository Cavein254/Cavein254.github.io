import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page:string,
    selectedPage:string,
    setSelectedPage:(value:string) => void,
}

const Link = ({page, selectedPage, setSelectedPage}:Props) => {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g,"");
  return (
    <AnchorLink
    href={`#${lowerCasePage}`}
    className={`${selectedPage === lowerCasePage ? "text-primary-200":""} transition duration-500 hover:text-secondary`}
    onClick={()=>setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link