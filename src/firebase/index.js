import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPnYvPeTH-iWZhuipvzzfr-8GsLriDuNc",
  authDomain: "portfolio-nextjs-a6150.firebaseapp.com",
  projectId: "portfolio-nextjs-a6150",
  storageBucket: "portfolio-nextjs-a6150.appspot.com",
  messagingSenderId: "930505827030",
  appId: "1:930505827030:web:8165f1e42917282df09f77",
  measurementId: "G-FS024WFYP5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
