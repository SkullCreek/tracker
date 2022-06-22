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
let database = firebase.database();
var lat;
var long;
var accuracy;
let username;
auth.onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../index.html");
    }
    else{
        username = user.email;
        let dummyname = username.split("@");
        let name = dummyname[0].split(".");
        document.getElementById("track").onclick = () =>{
            document.getElementById("track").disabled = true;
            finder();
            setInterval(()=>{
                finder();    
            },5000);
        }
        
        const finder = () => {
            if(!navigator.geolocation){
                console.log("your browser doesnot support geolocation feature!");
            }
            else{
                navigator.geolocation.getCurrentPosition(getPosition);
            }
            
            function getPosition(position){
                lat = position.coords.latitude;
                long = position.coords.longitude;
                accuracy = position.coords.accuracy;
                database.ref(name[0]).update({
                    latitude: lat,
                    longitude: long,
                    accuracy: accuracy
                });
            }
        }
    }
});




