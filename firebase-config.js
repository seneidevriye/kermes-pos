import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYtlHe7HjTsyX4V78m3q_6dFmn0Zq3dgY",
  authDomain: "eryaman-32833.firebaseapp.com",
  databaseURL: "https://eryaman-32833-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eryaman-32833",
  storageBucket: "eryaman-32833.firebasestorage.app",
  messagingSenderId: "483490073236",
  appId: "1:483490073236:web:0bcd8c019614024e960281"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
