import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

export default async function getPollStats(collection, documentId) {
  const docRef = doc(db, collection, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
