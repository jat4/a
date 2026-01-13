// auth.js
auth.onAuthStateChanged(user=>{
  if(user){
    window.location.href="quiz.html";
  }
});

function login(){
  auth.signInWithEmailAndPassword(
    email.value,
    password.value
  ).catch(e=>msg.innerText=e.message);
}

function signup(){
  auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  ).catch(e=>msg.innerText=e.message);
}

function toggle(){
  if(loginBtn.style.display==="none"){
    loginBtn.style.display="block";
    signupBtn.style.display="none";
    title.innerText="Login";
  }else{
    loginBtn.style.display="none";
    signupBtn.style.display="block";
    title.innerText="Signup";
  }
}
