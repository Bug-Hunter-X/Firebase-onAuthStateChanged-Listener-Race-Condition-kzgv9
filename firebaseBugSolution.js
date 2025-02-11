// FirebaseBugSolution.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// ... Firebase configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Wait for user data to be fully loaded
    await user.reload(); // Important step
    const uid = user.uid;
    const displayName = user.displayName;
    // ... safely access user data
    console.log('User data loaded:', uid, displayName);
  } else {
    console.log('User is signed out');
  }
});