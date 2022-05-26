// const firebaseConfig = {
//   apiKey: "AIzaSyCRG3egud11OW0TNX917LpM2j2fAEfThIw",
//   authDomain: "software-sheba-emails.firebaseapp.com",
//   databaseURL:
//     "https://software-sheba-emails-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "software-sheba-emails",
//   storageBucket: "software-sheba-emails.appspot.com",
//   messagingSenderId: "157322159291",
//   appId: "1:157322159291:web:89ae77bed4ddd052d9b59e",
//   measurementId: "G-EM3M43GQDD",
// };

// firebase.initializeApp(firebaseConfig);

// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contact").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("fullname");
//   var emailid = getElementVal("email");
//   var msgContent = getElementVal("message");

//   console.log(name, emailid, msgContent);
// }

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };

//-----------------------------------------------

// import { initializeApp } from "firebase/app";
// import { collection, getDocs, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

// initializeApp(firebaseConfig);

// const db = getFirestore();

// const colRef = collection(db, "messages");

// getDocs(colRef).then((snapshot) => {
//   let messages = [];
//   snapshot.docs.forEach((doc) => {
//     messages.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(messages);
// });

console.log("hello");
