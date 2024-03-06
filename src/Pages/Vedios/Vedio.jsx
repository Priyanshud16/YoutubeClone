import React from "react";
import './Vedio.css'
import PlayVedio from "../../Component/PlayVedio/PlayVedio";
import Recommended from "../../Component/Recommended/Recommended";
import { useParams } from "react-router-dom";
function Vedio(){
    const {videoId,categoryId}=useParams()
    return(
        <div className="play-container">
         <PlayVedio  videoId={videoId}/>
         <Recommended categoryId={categoryId}/>
        </div>
    )
}

export default Vedio