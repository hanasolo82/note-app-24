import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";

const myApi = import.meta.env.VITE_API_KEY;
const messageSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: myApi,
  authDomain: "notesapp-24.firebaseapp.com",
  projectId: "notesapp-24",
  storageBucket: "notesapp-24.appspot.com",
  messagingSenderId: messageSenderId,
  appId: appId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");