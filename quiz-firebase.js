// quiz-firebase.js

// 🔐 Auth guard (protect quiz page)
auth.onAuthStateChanged(user=>{
  if(!user){
    location.href = "index.html";
    return;
  }

  const uid = user.uid;

  // 🔄 Load quizzes from Firebase
  db.ref("users/"+uid+"/quizzes").once("value",snap=>{
    if(snap.exists()){
      localStorage.setItem("quizzes",JSON.stringify(snap.val()));
      location.reload(); // inject data into existing quiz UI
    }
  });

  // 🔁 Sync localStorage → Firebase
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function(key,value){
    originalSetItem.apply(this,arguments);
    if(key === "quizzes"){
      db.ref("users/"+uid+"/quizzes").set(JSON.parse(value));
    }
  };
});

// 🚪 Logout function (GLOBAL)
function logout(){
  auth.signOut().then(()=>{
    localStorage.clear();
    location.href = "index.html";
  }).catch(err=>{
    alert("Logout error: " + err.message);
  });
}
