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

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;

exports.handler = async (event) => {
  const data = JSON.parse(event.body).payload;
  const { fullname, email, message } = data.data;
  console.log(fullname, email, message);

  const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "messages");

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      // console.log(snapshot.docs)
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
    })
    .catch((err) => {
      console.log(err.message);
    });

  addDoc(colRef, {
    name: fullname,
    email: email,
    message: message,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
