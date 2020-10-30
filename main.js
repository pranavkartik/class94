var firebaseConfig = {
    apiKey: "AIzaSyBoFwi-4q1qfSEjvkTnxMkrsx8h1838rX0",
    authDomain: "kwitter-681f9.firebaseapp.com",
    databaseURL: "https://kwitter-681f9.firebaseio.com",
    projectId: "kwitter-681f9",
    storageBucket: "kwitter-681f9.appspot.com",
    messagingSenderId: "980209970562",
    appId: "1:980209970562:web:1186b5c37bb47001daf39b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
          purpose : "adding user",
          coding_lang : "javascript"
      });
  }