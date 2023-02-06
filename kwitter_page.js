//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAM_FP-SofLNckaazslGbElGg9KyVElaRU", authDomain: "classc93-d2b1a.firebaseapp.com", databaseURL: "https://classc93-d2b1a-default-rtdb.firebaseio.com", projectId: "classc93-d2b1a", storageBucket: "classc93-d2b1a.appspot.com", messagingSenderId: "461960094759", appId: "1:461960094759:web:681e12e4548a93b85b1a02", measurementId: "G-W4XYTGVJ24"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();

function send() {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}


