// firebase.js

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

// 🔥 GLOBAL VARIABLES (VERY IMPORTANT)
window.auth = firebase.auth();
window.db   = firebase.database();
