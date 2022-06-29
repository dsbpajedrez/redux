import { useEffect, useState } from "react";

const useInitialState = (API)=>{
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        fetch(API)
            .then(respuesta => respuesta.json())
            .then(data=> setVideos(data))
    },[])
    return videos
}
export default useInitialState;