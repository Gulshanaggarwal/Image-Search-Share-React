import React, { useState } from 'react'
import ImageResults from './components/ImageResults';
//import ImageResults from './components/ImageResults';
import Navbar from './components/Navbar'
import Search from './components/Search'
import { Mycontext } from './components/Search'
import Share from './components/Share'
import './App.css'
function App() {
  const [arr, setArr] = useState([]); /* ----> arr state set for fetched data */

  const [getUrl, setUrl] = useState(''); /* ----> Url state set */

  const [refShare,setRef]=useState(''); /* ----> Reference share state */

  /* Send data call back */

  function sendData(val) {
    setArr(val);

  }

  /* Share task call back for refshare */
  function shareTask(val){
    if(refShare!==val){
      setRef(val);
    }
  }

  /* Url data call back */

  function urlData(val) {
    if(getUrl!==val){
      setUrl(val);
    }
  }
  return (
    <div className="container">
      <Navbar />
      <Search sendData={sendData} />
      <div className="result-container">
        <Mycontext.Provider value={{
          arr: arr,
          refShare: refShare
        }}>
          <ImageResults urlData={urlData} />
        </Mycontext.Provider>
      </div>
      <Share getUrl={getUrl} shareTask={shareTask} />
      <div className="no-more" >No more results!!</div>
    </div>
  )
}

export default App;
