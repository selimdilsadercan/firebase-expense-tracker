import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU583HZHj7NWkHQL3P0gqohmylnXX_VPU",
  authDomain: "fir-expense-tracker-93742.firebaseapp.com",
  projectId: "fir-expense-tracker-93742",
  storageBucket: "fir-expense-tracker-93742.appspot.com",
  messagingSenderId: "153834142300",
  appId: "1:153834142300:web:0cbe0b8d12db1bbd770499"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
  