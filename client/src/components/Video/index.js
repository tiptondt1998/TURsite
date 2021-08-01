import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles.css';

export default function Video(){
const [member, setMember]=useState('');
//function handleSearch(event){
//   setMember(event.target.querySelector('uname').value.trim());
// }
const[vidData, setvidData] = useState([])
function handleSearch(event){
  //if(member !== ''){
  event.preventDefault();
//  const member =setMember(event.target.querySelector('uname').value.trim());
  
var apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+member+"&key=AIzaSyDRv7jX_KdBRx5kMMagdp-DHEYQgY_oHLU";
    fetch(apiURL)
    .then(function(response){
      if (response.ok) {
        response.json().then(function(data) {
          const videos = data.items.slice(1);
          setvidData(videos);
          console.log(vidData)
        });
      }else {
               alert("Error: " + response.statusText);
             }
    })
    //}
}

//<script src="https://apis.google.com/js/api.js"></script>
  //var vid = document.getElementById("vid");

  // function getTUR(member){
  //   let member = document.getElementById('uname').value;
  //   var  apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+member+"&key=AIzaSyDRv7jX_KdBRx5kMMagdp-DHEYQgY_oHLU";
  //   fetch(apiURL)
  //   .then(function(response) {
  //     if (response.ok) {
  //       response.json().then(function(data) {
  //         console.log(data);
  //         displayVideos(data);
  //       });
  //     } else {
  //       alert("Error: " + response.statusText);
  //     }
  //   });
  //   }
    // function displayVideos(data){
    //   for(i=1; i<5;i++){
    //   let vidID = data.items[i].id.videoId;
    //   youtubeURL = 'https://www.youtube.com/embed/' + vidID;
    //   console.log(vidID);
    //   var holder = document.createElement('iframe');
    //   holder.setAttribute('id', 'ytVid');
    //   holder.setAttribute('frameborder', 0);
    //   holder.setAttribute('allow', 'autoplay');
    //   holder.setAttribute('src', youtubeURL);
    //   vid.appendChild(holder);

    //   }
    // }

    return(
        <section id="meet-jay">
        <div id="vid">
          <form onSubmit={handleSearch}>
    Name:
    <input type="text"
           id="uname"
            value={member}
            onChange={(event)=>{
              setMember(event.target.value);
            }}/>
    <button type="submit" > get videos </button> 
        </form>
        {vidData.length?
        vidData.map((video, i)=>(
          <iframe key={i} src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder='0' allow='autoplay'>
            
          </iframe>
        )
      ):
      <></>}
        </div>
        </section>
    )
}