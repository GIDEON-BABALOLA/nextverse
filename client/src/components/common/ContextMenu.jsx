import "../../styles/components/common/context.css"
import { useRef, useEffect } from "react"
const ContextMenu = ({ contextMenuData, setContextMenu}) => {
    const context = useRef()
    useEffect(() => {
        setContextMenu(context)
    }, [setContextMenu])
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
                <li className="litenote-context-link" key={id}>
                    {item.icon}<span className="litenote-context-label">{item.label}</span>
                </li>
            
            )))
        }
</ul></>
  )
}

export default ContextMenu