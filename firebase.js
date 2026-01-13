// firebase.js (PURE JS FILE — NO <script> TAGS)

importScriptsIfNeeded();

function importScriptsIfNeeded(){
  if(typeof firebase !== "undefined") return;
}

// Firebase SDKs
document.write('<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"><\/script>');

setTimeout(()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyBRFCf1NGzRibFY0u72x1iGEuyahpyw4XI",
    authDomain: "quiz-maker-a.firebaseapp.com",
    databaseURL: "https://quiz-maker-a-default-rtdb.firebaseio.com",
    projectId: "quiz-maker-a",
    storageBucket: "quiz-maker-a.firebasestorage.app",
    messagingSenderId: "1065580063682",
    appId: "1:1065580063682:web:315a87ea265be8d139445b"
  };

  firebase.initializeApp(firebaseConfig);

  window.auth = firebase.auth();
  window.db = firebase.database();
}, 0);
