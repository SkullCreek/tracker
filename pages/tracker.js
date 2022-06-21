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

auth.onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../index.html");
    }
});

document.getElementById("track").onclick = () =>{
    finder();
    setInterval(()=>{
        finder();    
    },1000);
}

const finder = () => {
    if(!navigator.geolocation){
        console.log("your browser doesnot support geolocation feature!");
    }
    else{
        navigator.geolocation.getCurrentPosition(getPosition);
    }
    
    function getPosition(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        console.log(lat,long,accuracy);
    }
}

