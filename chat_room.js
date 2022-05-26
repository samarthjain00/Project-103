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

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);
function addUser() {
    var user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                
                    function redirectToRoomName(name) {
                        localStorage.setItem("roomName", name)
    window.location = "kwitterPage.html"
}
               
                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomName");
    window.location = "index.html"
}