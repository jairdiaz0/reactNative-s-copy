import { getFirestore } from "firebase/firestore";
import app from "../firebase/connection";

// Initialize Firebase
const db = getFirestore(app);

export default db;