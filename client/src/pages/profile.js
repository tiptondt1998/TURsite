import "./styles.css";
import 'gapi';
 function profile(){

   

    var getTUR = function(){ 
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=turjay&key=AIzaSyDRv7jX_KdBRx5kMMagdp-DHEYQgY_oHLU")
      .then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
            //displayMostPopularGames(data);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      });
      }

//       // Make sure the client is loaded before calling this method.
//   function execute() {
//     function loadClient() {
//         gapi.client.setApiKey("AIzaSyDRv7jX_KdBRx5kMMagdp-DHEYQgY_oHLU");
//         return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//             .then(function() { console.log("GAPI client loaded for API"); },
//                   function(err) { console.error("Error loading GAPI client for API", err); });
//       }
//     return gapi.client.youtube.search.list({
//       "part": [
//         "snippet"
//       ],
//       "channelId": "UCY3AzFR3-YRso_H2cGU3msQ",
//       "channelType": "any",
//       "eventType": "none",
//       "forContentOwner": true,
//       "forDeveloper": true,
//       "forMine": true,
//       "order": "relevance",
//       "q": "turjay",
//       "videoType": "any"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");
    return(
        <section>
            
              {/* <button onclick="loadClient()">load</button>
              <button onclick="execute()">execute</button> */}
            <ul>
                <li> <a href="./video.html">Videos</a> </li>
                <li> <a>Merch Store</a> </li>
                <li> <a>Application</a> </li>
            </ul>
            <p id="meet">Meet the TUR Family</p>
            <h1>Jay</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
            <h1>Griso</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
            <h1>xfolded</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
            <h1>Bossdon</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
            <h1>ToxicJune</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
            <h1>Tony</h1>
            <p id="meet_jay">asdfghgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdsdfgfdwqwsdfgfdewedfghgfdsdfvbhtredfghjtrf</p>
        </section>
        
    )
}
export default profile;