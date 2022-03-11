import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore/lite'

const firebaseConfig: FirebaseOptions = {
  apiKey: <string>import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: <string>import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: <string>import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: <string>import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: <string>import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: <string>import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: <string>import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const bikesCollection = collection(db, 'bikes')
