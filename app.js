
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4nosRN9-_B0RhwDHllEiBJGu7ykALvvY",
  authDomain: "chat-7942e.firebaseapp.com",
  projectId: "chat-7942e",
  storageBucket: "chat-7942e.appspot.com",
  messagingSenderId: "1092794170402",
  appId: "1:1092794170402:web:b13b7468bf0e9d74825e7b",
  measurementId: "G-Z92NC2V89X"
};

//! Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn")

//! google  sgin start

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("suss")
      window.location.href = "chat.html"

    }).catch((error) => {
      console.log("erorr")
    });
}
loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click", signInWithGoogle)
//! google  sgin End

//! google logout start

const logoutButton = document.getElementById("logoutButton")
const googlelogout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "index.html"

  }).catch((error) => {
    // An error happened.
  });
}
logoutButton && logoutButton.addEventListener("click", googlelogout)

//! google logout start

//! email password sginup start  
const btnsignup = document.getElementById("registerButton");
btnsignup&&btnsignup.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
    window.location.href = "chat.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
});
//! email password sginup end 
//! email login password sginup start 
const SubmitDataEmaillogin = document.getElementById("SubmitDataEmaillogin");
SubmitDataEmaillogin&&SubmitDataEmaillogin.addEventListener("click", () => {
  const email = document.getElementById("emaillogin").value;
  const password = document.getElementById("passwordlogin").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href = "chat.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});
