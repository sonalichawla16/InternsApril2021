


 
var firebaseConfig = {
    apiKey: "AIzaSyAT7Ic0YBb3D3FTF55BOIz5cJRFWjopjNk",
    authDomain: "calender-b929f.firebaseapp.com",
    projectId: "calender-b929f",
    storageBucket: "calender-b929f.appspot.com",
    messagingSenderId: "502926317691",
    appId: "1:502926317691:web:0089607ed8e33c67e9aade",
    measurementId: "G-VXSFKZLYX4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth();

function signup(){
    var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		if(email!="" || password!="")
    window.open("../calender/index1.html");
    else{
        alert("Enter Your Email And Password");
    }
		
}
function signin(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    if(email==null || password==null)
    alert("Enter Your Email And Password");
    else{
        
        window.open("../calender/index1.html");
    }
}

function signout(){
    auth.signOut();
    window.open("../index.html");
}
//  auth.onAuthStateChanged(function(user){
		
//     if(user){
        
// var email = user.email;
        
        
//      }else{
        
//          alert("No Active User");
//          //no user is signed in
//     }
    
//  });

