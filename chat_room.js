var firebaseConfig = {
    apiKey: "AIzaSyAKPDokRiVCx_1sHA-Zc-hAtYAgT1TcwhA",
    authDomain: "lets-chat-app-e834e.firebaseapp.com",
    databaseURL: "https://lets-chat-app-e834e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-e834e",
    storageBucket: "lets-chat-app-e834e.appspot.com",
    messagingSenderId: "575197580298",
    appId: "1:575197580298:web:1be4a684bff6855eaaa3f3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
     });

     localStorage.setItem("room_name", room_name);
     window.location="chat_page.html";
     

}

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"

    });
    localStorage.setItem("user_name" ,user_name);
    window.location="chat_room.html"
  }

function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";
}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
