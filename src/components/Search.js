import React, { useState } from 'react'
import axios from 'axios'
export const Mycontext = React.createContext();

function Search(props){
    const [text,setText]=useState('');  /* ------>>>> Set text state*/

    /* Text change detect function */

    function textChange(event){
        setText(event.target.value);
        /* Api data fetch using Axios */
        axios(`https://pixabay.com/api/?key=21395729-f07da739afefeea38e43295e7&q=${event.target.value}&image_type=photo&pretty=true&per_page=200`)
        .then(
            (res)=>props.sendData(res.data.hits)
        )
        .catch((err)=>console.log(err));
    }
    return(
        <div className="input">
            <p>Simply type your query here! </p>
            <input type="text" value={text} onChange={textChange} placeholder="Search" />
        </div>
    )
}
export default Search