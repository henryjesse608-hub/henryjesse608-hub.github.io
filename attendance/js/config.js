const firebaseConfig = {
  apiKey: "AIzaSyAQGiUhECEf-Ssy-Qxwck1Q26x7dbjut14",
  authDomain: "attendance-622d8.firebaseapp.com",
  databaseURL: "https://attendance-622d8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "attendance-622d8",
  storageBucket: "attendance-622d8.firebasestorage.app",
  messagingSenderId: "674935287204",
  appId: "1:674935287204:web:6135e09595e2b840db2531",
  measurementId: "G-M8JNHCBQ4Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

console.log ('connected to firebase')
function logout(){
  //body...
  firebase.auth().signOut().then(function(){
    window.location.href = "index.html"
  }).catch((error)  => {
    alert("An error occured while you tried to logout")
  })
}