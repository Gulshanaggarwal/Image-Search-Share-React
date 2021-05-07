import React from 'react'
import { Mycontext } from './Search'

function ImageResults(props) {
    let copyData;  /* ----> Copy data variable to copy data from data*/
     
    /* Share component render function */
    
    function shareComp(event) {
        let appearRef = copyData.refShare;
        appearRef.current.style.display = 'flex';

        /* url pass call back */
        props.urlData(event.target.parentNode.children[0].src);
    }
    return (
        <Mycontext.Consumer>
            {
                (data) => {
                    copyData = data;

                    return (
                        data.arr.map((ele) => {
                            return (
                                <div className='image-wrapper' key={ele.id}>
                                    <img src={ele.largeImageURL} alt="Images" className="img" />
                                    <button type="button" onClick={shareComp}>Share</button>
                                </div>
                            )
                        })
                    )
                }
            }
        </Mycontext.Consumer>
    )
}
export default ImageResults