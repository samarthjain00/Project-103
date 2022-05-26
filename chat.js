const firebaseConfig = {
    apiKey: "AIzaSyDbL9ekBeTAKCvoLS87x8sqMTC4blIFpV0",
    authDomain: "letschat-web-app-1011a.firebaseapp.com",
    databaseURL: "https://letschat-web-app-1011a-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-1011a",
    storageBucket: "letschat-web-app-1011a.appspot.com",
    messagingSenderId: "260540433451",
    appId: "1:260540433451:web:96d1f589354853d7a6566e",
    measurementId: "G-M5VHXW94KE"
  };
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



