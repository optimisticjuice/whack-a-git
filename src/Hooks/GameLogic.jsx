import { useEffect, useRef } from "react";

export default function GameLogic(){
    const backgroundMusicRef = useRef(null);

    useEffect(() => {
        if(!backgroundMusicRef.current){
            backgroundMusicRef.current = new Audio("/assets/sounds/music.mp3");
        }

        return () => {
            if(backgroundMusicRef.current){
                backgroundMusicRef.current.pause();
                backgroundMusicRef.current = null;
            }
        }
    }, []);

    return{
        backgroundMusicRef
    }
}