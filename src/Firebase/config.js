import { initializeApp } from "firebase/app";
import { getDatabase, } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALengmsvAqYUsJvJaq78xLntBXZ5KbOvE",
  authDomain: "techbrainapp-b36b5.firebaseapp.com",
  databaseURL: "https://techbrainapp-b36b5-default-rtdb.firebaseio.com",
  projectId: "techbrainapp-b36b5",
  storageBucket: "techbrainapp-b36b5.appspot.com",
  messagingSenderId: "778151046929",
  appId: "1:778151046929:web:b8d554e7d5814f3633e6b0"
};

const app = initializeApp(firebaseConfig);

export const getdatabase = () =>{
  return (
    getDatabase(app)
  )
}

export const getstorage = () => {
  return (
    getStorage(app)
  )
}
