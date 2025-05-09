import "../Styles/CustomCursor.css";

function CustomCursor(){
    return(
        <img src="/assets/images/stormbreaker.svg" className="cursor" alt="Custom_Cursor"/> 
    )
}
function CursorFollow(){
    const cursor = document.querySelector(".cursor");
    if(!cursor)return;

    const moveCursor = (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        });
    }
    const handleMouseOver = (e) => {
       if (e.target.tagName === "BUTTON") {
        cursor.style.display = "none";
        document.body.style.cursor = "pointer";
    } else {
        cursor.style.display = "block";
        document.body.style.cursor = "none";
       } 
    }
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
        document.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mouseover", handleMouseOver);
    }
}

export {CustomCursor, CursorFollow};
