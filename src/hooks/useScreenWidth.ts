import { useEffect, useState } from 'react';

const useScreenWidth = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(()=>{
        const handleScreenSize = () => {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleScreenSize );
        return () => window.removeEventListener('resize', handleScreenSize);
    },[])

    return screenSize;
}

export default useScreenWidth
