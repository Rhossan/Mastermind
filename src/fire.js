
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKVJzqMdvi1v_3zwr52dAGUAAGTc_Pxc0",
    authDomain: "mastermind-2ccf3.firebaseapp.com",
    databaseURL: "https://mastermind-2ccf3.firebaseio.com",
    projectId: "mastermind-2ccf3",
    storageBucket: "mastermind-2ccf3.appspot.com",
    messagingSenderId: "664135201756"
  };
  var fire = firebase.initializeApp(config);
  export default fire;
