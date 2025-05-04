import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAWG0qtBaZFsuTXoTiz_I4ygHVSUndS4k",
  authDomain: "romu-rmt.firebaseapp.com",
  projectId: "romu-rmt",
  storageBucket: "romu-rmt.appspot.com",
  messagingSenderId: "792882957292",
  appId: "1:792882957292:web:9147f9e4ce4111f9aacec9",
  measurementId: "G-ZHH7PTGM0Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, getDocs };
