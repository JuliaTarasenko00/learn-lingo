import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const API_KEY = process.env.REACT_APP_API_KEY;
const AUTHDOMAIN = process.env.AUTHDOMAIN;
const APPID = process.env.APPID;
const MEASUREMENTID = process.env.MEASUREMENTID;
const MESSAGINGSENDERID = process.env.MESSAGINGSENDERID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: 'learn-lingo-f345f',
  storageBucket: 'learn-lingo-f345f.appspot.com',
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase();
