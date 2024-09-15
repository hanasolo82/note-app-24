import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCLLs-FvO8Cs8NldFiuGMGUfbm5Q4mIL2o",
  authDomain: "notesapp-24.firebaseapp.com",
  projectId: "notesapp-24",
  storageBucket: "notesapp-24.appspot.com",
  messagingSenderId: "260782492267",
  appId: "1:260782492267:web:8f6e1bb25b65d87d473f2e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");