//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBL3iFMuZ0gZR5MKSk-e0LbNfflH18RFEQ",
      authDomain: "kwitter-70964.firebaseapp.com",
      databaseURL: "https://kwitter-70964-default-rtdb.firebaseio.com",
      projectId: "kwitter-70964",
      storageBucket: "kwitter-70964.appspot.com",
      messagingSenderId: "984535359800",
      appId: "1:984535359800:web:83abc4f3848b438f7421cd",
      measurementId: "G-3PRWT97790"
    };
    
    // Initialize Firebase
   // const analytics = getAnalytics(app);
   const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
        like:0  
      });

      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}