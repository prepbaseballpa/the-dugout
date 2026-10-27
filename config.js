/* The Dugout — site settings. Nothing here is secret: Firebase web config only identifies the project.
   Access is enforced by the Firestore and Storage security rules. */
window.DUGOUT_CONFIG = {
  // Paste the firebaseConfig block from Firebase console → Project settings → Your apps → Web app
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Always have Full access, even before the Staff tab is set up. Must match firestore.rules.
  owners: ["ocker@prepbaseball.com"],
  // Set to false if Firebase Storage isn't enabled (hides video/photo uploads; links still work).
  storage: true
};
