import { db } from "../config";
import { setDoc, doc } from "firebase/firestore";

export async function writePollData(collection, document, yesVotes, noVotes) {
  const documentRef = await doc(db, collection + "/" + document);

  setDoc(documentRef, {
    yes: yesVotes,
    no: noVotes,
  });
}
