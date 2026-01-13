// quiz-firebase.js
auth.onAuthStateChanged(user=>{
  if(!user){
    window.location.href="index.html";
    return;
  }

  const uid = user.uid;

  // LOAD quizzes from Firebase
  db.ref("users/"+uid+"/quizzes").once("value",snap=>{
    if(snap.exists()){
      localStorage.setItem("quizzes",JSON.stringify(snap.val()));
      location.reload(); // inject into existing UI
    }
  });

  // PATCH localStorage save
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function(key,value){
    originalSetItem.apply(this,arguments);
    if(key==="quizzes"){
      db.ref("users/"+uid+"/quizzes").set(JSON.parse(value));
    }
  };
});

function logout(){
  localStorage.clear();
  auth.signOut();
}
