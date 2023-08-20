import { getAuth, signInAnonymously } from "firebase/auth";
import { firebaseApp } from "../config";
import { onAuthStateChanged } from "firebase/auth";

export default async function AnonSignIn() {
  const auth = getAuth(firebaseApp);

  try {
    await signInAnonymously(auth);

    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          resolve("Anonymous sign in with " + uid);
        } else {
          resolve("Anonymous sign out");
        }
        unsubscribe(); // Unsubscribe after the first auth state change
      });
    });
  } catch (error) {
    return error;
  }
}
