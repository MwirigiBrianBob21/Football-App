import React, {useEffect, useState} from "react"
import axios from "axios"
import LikeButton from "../components/LikeButton"

const Highlights = () => {
    const[data, setData] = useState([])
    useEffect(()=>{
        axios({
            method: "GET",
            url: `https://www.scorebat.com/video-api/v3/feed/?token=Mjg3NThfMTY2NTEwMDAxNF82YzY5MmU3N2I4ZmQzNGE1Yjc3MWZmZDQwN2JjZWQ2ZTA0ZWIxZmY1`
        }).then((res)=> {
            // console.log(res.data);
            setData(res.data.response)
        })
        .catch((err) => console.log(err))
    }, []);
    return(
        <div className="live-content">
            {data.map((item)=>(
                <div>
                    <div className="itemDiv" key={item.title} onClick={()=> window.open(item.matchviewUrl)}>
                    <div className="itemHeading">
                        <h4>{item.title}</h4>
                        

                    
                    
                    </div>
                   <div className="itemImage">
                    <img src={item.thumbnail} alt="#"/>
                   </div>
                   
                   
                    </div>
                    <div className="likes-counter"><LikeButton itemId={item.title} /></div>
                </div>
                
            ))}

            
        </div>
    )
}

export default Highlights;
