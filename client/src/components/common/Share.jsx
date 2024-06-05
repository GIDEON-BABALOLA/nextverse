import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../../styles/components/common/share.css"
const Share = ( { share, shareModal}) => {
const [text, setText] = useState(false)
  const closeShareModal = () => {
    shareModal.current.close()
  }
  const copyLink = () => {
setText(!text)
  }
  return (
    <section>

    <dialog className="litenote-copy-link-dialog litenote-share-slide-down show" ref={share}>
        <form>
            <header>
                <h2>Share the link</h2>
                <button className="litenote-close-btn secndary" type="button" onClick={closeShareModal}>
                <span>
                <FaTimes style={{outline : "none"}}/>

                
                </span>
            
                </button>
            </header>
            <div className="litenote-copy-link-dialog__content">
                <div className="litenote-copy-link-wrapper">
                    <input id="copy-link-input" type="text" required value="https://example.com/share-this" readOnly />
                    <button
                    style={{color : "#ff5e62"}}
                     className="litenote-copy-btn" type="button" onClick={copyLink}>
                     <FaLink />
                        <span id="copy-text">
                           { text ?  "Copied" :"Copy Link"}
                        </span>
                    </button>
                </div>
                <span className="litenote-share-social-icons">
                <FaFacebookSquare
                size={25} /><FaTwitter
                size={25}  /><FaInstagram 
                size={25} 
                />
                </span>
            
            </div>
        </form>
    </dialog>
</section>
  )
}

export default Share