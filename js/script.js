const firebaseConfig = {
    apiKey: "AIzaSyDwc9T_jMP1Ust-vH1yfu8HlCrRZ_AGtV8",
    authDomain: "firebasics-01.firebaseapp.com",
    projectId: "firebasics-01",
    storageBucket: "firebasics-01.appspot.com",
    messagingSenderId: "975869999815",
    appId: "1:975869999815:web:df7a2b28ea59236ba21ce2",
    measurementId: "G-DF1SXLBWXS"
};
firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
});

auth.onAuthStateChanged((user)=>{
    if(user){
        location.replace("../pages/tracker.html");
    }
});

const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email,password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("error").innerHTML = error.message;
    });
}

const signup = () =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("error").innerHTML = error.message;
    });
}

document.getElementById("login-button").onclick = () => {
    login();
}

document.getElementById("signup-button").onclick = () => {
    signup();
}