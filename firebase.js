<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<script>
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

  const auth = firebase.auth();
  const db = firebase.database();
</script>
