


import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


function App() {
  
  const apiKey= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
 
  
  const setprogress=(progress)=>{
    setProgress(progress)
  }

 
    return (
    <div>
      <Router> 
        <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />

       
        <Routes>

          
          <Route exact path="/" element={ <News apiKey={apiKey}  setProgress={setprogress} key="general" pageSize={8} country='in' category='general'/>}/>
          <Route exact path="/general" element={ <News apiKey={apiKey} setProgress={setprogress} key="general" pageSize={8} country='in' category='general'/>}/>
          <Route exact path="/business" element={ <News apiKey={apiKey} setProgress={setprogress} key="business" pageSize={8} country='in' category='business'/>}/>
          <Route exact path="/sports" element={ <News apiKey={apiKey} setProgress={setprogress} key="sports" pageSize={8} country='in' category='sports'/>}/>
          <Route exact path="/science" element={ <News apiKey={apiKey} setProgress={setprogress} key="science" pageSize={8} country='in' category='science'/>}/>
          <Route exact path="/entertainment" element={ <News apiKey={apiKey} setProgress={setprogress} key="entertainment" pageSize={8} country='in' category='entertainment'/>}/>
          <Route exact path="/technology" element={ <News apiKey={apiKey} setProgress={setprogress} key="technology" pageSize={8} country='in' category='technology'/>}/>
          <Route exact path="/health" element={ <News apiKey={apiKey} setProgress={setprogress} key="health" pageSize={8} country='in' category='health'/>}/>

        </Routes>
      </Router> 
    </div>
     
    )
  
}

export default App
