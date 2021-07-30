import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

function video(){
    
 <script src="https://apis.google.com/js/api.js"></script>
  var vid = document.getElementById("vid");

  function getTUR(vid){
    let member = document.getElementById('uname').value;
    var  apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+member+"&key=AIzaSyDRv7jX_KdBRx5kMMagdp-DHEYQgY_oHLU";
    fetch(apiURL)
    .then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);
          displayVideos(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
    }
    function displayVideos(data){
      for(i=1; i<5;i++){
      let vidID = data.items[i].id.videoId;
      youtubeURL = 'https://www.youtube.com/embed/' + vidID;
      console.log(vidID);
      var holder = document.createElement('iframe');
      holder.setAttribute('id', 'ytVid');
      holder.setAttribute('src', youtubeURL);
      vid.appendChild(holder);

      }
    }

    return(
        <section id="meet-jay">
        <div id="vid">
    Name:
    <input type="text"
           id="uname" />
    <button type="button" 
            onclick="getTUR()"> get videos </button> 
        </div>
        </section>
    )
}