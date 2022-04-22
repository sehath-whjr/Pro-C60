 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAVPpUk5UmkSz8y3e1hCdi5Ipal2L8tF7s",
  authDomain: "pro-c60-338eb.firebaseapp.com",
  databaseURL: "https://pro-c60-338eb-default-rtdb.firebaseio.com",
  projectId: "pro-c60-338eb",
  storageBucket: "pro-c60-338eb.appspot.com",
  messagingSenderId: "909893132952",
  appId: "1:909893132952:web:92d9948d45de367337e6ed"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.database()
 

  