alert("login.js loaded");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkPU_lMKncV-iT6deqHJdRD510Cg03lvE",
  authDomain: "animehub-kurd.firebaseapp.com",
  projectId: "animehub-kurd",
  storageBucket: "animehub-kurd.firebasestorage.app",
  messagingSenderId: "653135575380",
  appId: "1:653135575380:web:c671144ce5aae0a7a670c1",
  measurementId: "G-NRL4L95RKG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");

signupBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("هەژمار بە سەرکەوتوویی دروست بوو 🎉");
    })
    .catch((error) => {
      alert(error.message);
    });
});

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("بە سەرکەوتوویی چوویتە ژوورەوە 🎌");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
