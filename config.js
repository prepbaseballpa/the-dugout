/* The Dugout — site settings. Nothing here is secret: Firebase web config only identifies the project.
   Access is enforced by the Firestore security rules. */
window.DUGOUT_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBKh-5AdJ1stG-axQU07x3JPApEHpxjYuo",
    authDomain: "the-dugout-pa.firebaseapp.com",
    projectId: "the-dugout-pa",
    storageBucket: "the-dugout-pa.firebasestorage.app",
    messagingSenderId: "953722614251",
    appId: "1:953722614251:web:da533bcf7b26351fb0e9ae"
  },
  // Always have Full access. Must match the owner list in firestore.rules.
  owners: ["ocker@prepbaseball.com"],
  // Video/photo uploads stay off until Firebase Storage is set up (links still work).
  storage: false
};
