// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   setDoc,
//   setLogLevel,
//   addDoc,
// } from "firebase/firestore";

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

// document.getElementById("contact-form").addEventListener("submit", submitForm);

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

const formSubmitHandler = async (e) => {
  e.preventDefault();
  console.log("form submitted");
  await fetch("http://localhost:8888/.netlify/functions/test", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

document
  .getElementById("contact-form")
  .addEventListener("submit", formSubmitHandler);

// Email.send({
//   Host: "smtp.elasticemail.com",
//   Username: "amabirbd@gmail.com",
//   Password: "D0E647A12DF8A0A066F324856399EA1D042D",
//   To: "abir4u2011@gmail.com",
//   From: document.getElementById("email").value || "amabirbd@gmail.com",
//   Subject: "Contact Email",
//   Body: "And this is the body",
// }).then((message) => alert(message));

// import { firestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_DATABASE_URL,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   FIREBASE_MEASUREMENT_ID,
// } = process.env;

// console.log(FIREBASE_AUTH_DOMAIN);

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

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
