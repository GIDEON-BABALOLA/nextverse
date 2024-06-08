import "../../styles/components/common/context.css"
import { useRef, useEffect } from "react"
const ContextMenu = ({ contextMenuData, setContextMenu, shareModal, contextMenu}) => {
    const context = useRef()
    useEffect(() => {
        setContextMenu(context)
    }, [setContextMenu])
    const openShare = (e) => {
        switch (e.target.innerText) {
            case "Share":
                     shareModal.current.showModal()
                break;
                case "Bookmark":
                
                break;
                case "Close":
                    console.log("dave")
                    console.log( contextMenu.current.style.visibility )
                    contextMenu.current.style.visibility = "hidden"
                    console.log("why")
                break;
        
            default:
                break;
        }
    }
  return (
    <>    
        <ul className="litenote-context" 
        style={{
    width:"200px",
    margin: 0,
    paddingLeft: 0,
    boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)' ,
    background:"white",
    position: "fixed",
    fontSize:"16px",
    visibility: "hidden",
    fontFamily: "Poppins, sans-serif", // Corrected line
}}
        ref={context}>
        {
            contextMenuData.map(((item, id) => (
                <li className="litenote-context-link" key={id} onClick={openShare} data-name={item.label}>
                    {item.icon}<span className="litenote-context-label">{item.label}</span>
                </li>
            
            )))
        }
</ul></>
  )
}

export default ContextMenu