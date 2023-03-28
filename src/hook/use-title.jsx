import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}/Cinemate`
    })
    console.log()
    return null
};

export default UseTitle;
