
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAM_FP-SofLNckaazslGbElGg9KyVElaRU", authDomain: "classc93-d2b1a.firebaseapp.com", databaseURL: "https://classc93-d2b1a-default-rtdb.firebaseio.com", projectId: "classc93-d2b1a", storageBucket: "classc93-d2b1a.appspot.com", messagingSenderId: "461960094759", appId: "1:461960094759:web:681e12e4548a93b85b1a02", measurementId: "G-W4XYTGVJ24"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome"+ user_name+ "!";

    function addRoom()
    {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name- " + Room_names);
      row= "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>"; 
      document.getElementById("output").innerHTML += row;
});
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}