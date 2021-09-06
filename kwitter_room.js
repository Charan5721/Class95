
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);

user_name=localStorage.getItem("user_name")
    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });


  localStorage.setItem("room_name",  room_name);


  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " +  Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",  name);
  window.location = "kwitter_page.html";
}



function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}