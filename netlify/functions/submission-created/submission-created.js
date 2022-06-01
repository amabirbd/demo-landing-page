import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  setLogLevel,
  addDoc,
} from "firebase/firestore";

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

exports.handler = async (event) => {
  const data = JSON.parse(event.body).payload.data;
  const { fullname, email, message } = data;
  console.log(fullname, email, message);

  const firebaseConfig = {
    apiKey: "AIzaSyCRG3egud11OW0TNX917LpM2j2fAEfThIw",
    authDomain: "software-sheba-emails.firebaseapp.com",
    databaseURL:
      "https://software-sheba-emails-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "software-sheba-emails",
    storageBucket: "software-sheba-emails.appspot.com",
    messagingSenderId: "157322159291",
    appId: "1:157322159291:web:89ae77bed4ddd052d9b59e",
    measurementId: "G-EM3M43GQDD",
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "messages");

  addDoc(colRef, {
    name: fullname,
    email: email,
    message: message,
  })
    .then(() => {
      console.log("success firebase");
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "ok" }),
  };
};
