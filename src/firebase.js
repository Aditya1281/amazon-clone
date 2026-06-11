import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsQZzxaPnpy0Zc2Eaa48Zu9Ux6-bygjzU",
  authDomain: "clone-demo-facf7.firebaseapp.com",
  projectId: "clone-demo-facf7",
  storageBucket: "clone-demo-facf7.firebasestorage.app",
  messagingSenderId: "1052773858133",
  appId: "1:1052773858133:web:0ee624580b5373ad9c0ddc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);