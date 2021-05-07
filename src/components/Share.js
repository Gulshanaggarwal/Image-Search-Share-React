import React, { useState, useRef} from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon, WhatsappIcon, WhatsappShareButton, TelegramShareButton, TelegramIcon } from "react-share"
function Share(props) {
    const [linkStatus, setLinkStatus] = useState("Copy the Url!"); /* ----> Url copy status */

    let [size,setSize]=useState(35); /* ----> Icons size state */

    let myref = useRef();  /* ----> Reference variable */
    
    /* timeout function for reference*/
    setTimeout(() => {
        props.shareTask(myref);
    })

    /*---- On resize function ------*/
    function resize(){
       if((window.innerWidth>300)&&(window.innerWidth<=400)){
           setSize(40);
       }
       else if(window.innerWidth<=300){
           setSize(30);
       }
       else{
           setSize(50);
       }
    }
   window.addEventListener('resize',resize);

   /*----- Disappear function------- */

    function disappear() {
        let disappearRef = myref;
        disappearRef.current.style.display = 'none';
        setLinkStatus("Copy the Url!");
    }

    /*----- CopyUrl function------- */

    function copyUrl(event) {
        event.preventDefault();
        var input = document.body.appendChild(document.createElement('input'));
        input.value = event.target.parentNode.href;
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setLinkStatus("Url copied!");
    }

    return (
        <div className="share-container-wrapper" ref={myref}>
            <div className="share-container">
                <div className="cross-icon" onClick={disappear} >X</div>
                <p className="dialog">Start sharing with your favourite community 🤩🤩</p>
                <div className="icon-wrapper">
                    <FacebookShareButton url={props.getUrl}>
                        <FacebookIcon size={size} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={props.getUrl}>
                        <TwitterIcon size={size} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={props.getUrl}>
                        <LinkedinIcon size={size} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={props.getUrl}>
                        <WhatsappIcon size={size} round={true} />
                    </WhatsappShareButton>
                    <TelegramShareButton url={props.getUrl}>
                        <TelegramIcon size={size} round={true} />
                    </TelegramShareButton>
                </div>
                <div className="link-copy">
                    <p className="or">OR</p>
                    <a href={props.getUrl} onClick={copyUrl}><i className="fas fa-link"></i></a>
                    <p className="copy-dialog">{linkStatus}</p>
                </div>
            </div>
        </div>
    )
}
export default Share