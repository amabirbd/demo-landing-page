import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// require("dotenv").config();

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

exports.handler = async (event) => {
  const data = JSON.parse(event.body).payload;
  const { name, email, message } = data.data;
  console.log(data);

  // const firebaseConfig = {
  //   apiKey: FIREBASE_API_KEY,
  //   authDomain: FIREBASE_AUTH_DOMAIN,
  //   databaseURL: FIREBASE_DATABASE_URL,
  //   projectId: FIREBASE_PROJECT_ID,
  //   storageBucket: FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  //   appId: FIREBASE_APP_ID,
  //   measurementId: FIREBASE_MEASUREMENT_ID,
  // };

  // // init firebase
  // initializeApp(firebaseConfig);

  // // init services
  // const db = getFirestore();

  // // collection ref
  // const colRef = collection(db, "messages");

  // // get collection data
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     // console.log(snapshot.docs)
  //     let messages = [];
  //     snapshot.docs.forEach((doc) => {
  //       messages.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(messages);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  // // add contact message
  // const addContactMessageForm = document.querySelector(".contact-form");

  // console.log(addContactMessageForm);

  // addContactMessageForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   console.log(addContactMessageForm);

  //   addDoc(colRef, {
  //     name: addContactMessageForm.fullname.value,
  //     email: addContactMessageForm.email.value,
  //     message: addContactMessageForm.message.value,
  //   });
  // });

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};