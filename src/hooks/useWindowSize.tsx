import {useState, useEffect} from 'react';

type WindowSize = () => {width: number, height: number}

const useWindowSize: WindowSize = () => {

    const [size, setSize] = useState({
        width: 0,
        height: 0
    })


    function handleSize () {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {

        handleSize();
        window.addEventListener('resize', handleSize);
    }, [])
    
    return size;
}

export default useWindowSize