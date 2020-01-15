import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBkpE2DrD-lnhczyAqd5jLazFR1SzzQfBs",
  authDomain: "mycosmetic-236e7.firebaseapp.com",
  databaseURL: "https://mycosmetic-236e7.firebaseio.com",
  projectId: "mycosmetic-236e7",
  storageBucket: "mycosmetic-236e7.appspot.com",
  messagingSenderId: "566058979749",
  appId: "1:566058979749:web:9665334cf64837338b584c",
  measurementId: "G-8SBJP2FT1C"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;