import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  setLogLevel,
  addDoc,
} from "firebase/firestore";

const nodemailer = require("nodemailer");

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
  const data = JSON.parse(event.body).payload.data;
  const { fullname, email, message } = data;

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

  // add message to the firestore database
  await addDoc(colRef, {
    name: fullname,
    email: email,
    message: message,
  })
    .then((data) => {
      console.log("success firebase");
    })
    .catch((err) => {
      console.log(err);
    });

  // send email using nodemailer
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "amabirbd@gmail.com", // sender address
    to: "admin@softwaresheba.com", // list of receivers
    subject: "New Contact Form Submission", // Subject line
    text: `
      A new message was received,
      
      Sender ${fullname}
      Sender Email: ${email}
      Message: ${message}
    `, // plain text body
  });

  console.log("Message sent: %s", info.messageId);

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "ok" }),
  };
};
