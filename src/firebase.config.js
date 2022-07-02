import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC175HZML7TjzOc-ZKFMfseCuFDmCCp6DM',
  authDomain: 'house-marketplace-app-bda26.firebaseapp.com',
  projectId: 'house-marketplace-app-bda26',
  storageBucket: 'house-marketplace-app-bda26.appspot.com',
  messagingSenderId: '14027243805',
  appId: '1:14027243805:web:1f7bffaab295c8e96fa1f4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
