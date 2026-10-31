import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6pY967GE9uZRhCPSLSIV1JZwaN4OO_e8",
  authDomain: "app-padrao-egn.firebaseapp.com",
  projectId: "app-padrao-egn",
  storageBucket: "app-padrao-egn.firebasestorage.app",
  messagingSenderId: "112417450223",
  appId: "1:112417450223:web:ecd95d5b81a7e4f0fd931a",
  measurementId: "G-XSNJ50DL1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

