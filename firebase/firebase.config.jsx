import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVcaL2fWJlyp7rJHIxNqoT8ACxjZfKpH8",
  authDomain: "reminder-fb2ae.firebaseapp.com",
  projectId: "reminder-fb2ae",
  storageBucket: "reminder-fb2ae.appspot.com",
  messagingSenderId: "314037963755",
  appId: "1:314037963755:web:f5ad717519de65e323e7ae",
};

const app = initializeApp(firebaseConfig);
export default app;
