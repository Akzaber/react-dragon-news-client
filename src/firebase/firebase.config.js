// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCknKNMpCShuEFKTMVloncGokdff2kklFw",
  authDomain: "react-dragon-news-client.firebaseapp.com",
  projectId: "react-dragon-news-client",
  storageBucket: "react-dragon-news-client.appspot.com",
  messagingSenderId: "859401797948",
  appId: "1:859401797948:web:a2d8c60d3f15cb4f67de39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;