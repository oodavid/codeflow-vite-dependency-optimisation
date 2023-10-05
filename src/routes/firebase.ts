import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'redacted',
	appId: 'redacted',
	authDomain: 'redacted.firebaseapp.com',
	databaseURL: 'https://redacted.firebaseio.com',
	measurementId: 'redacted',
	messagingSenderId: 'redacted',
	projectId: 'redacted',
	storageBucket: 'redacted.appspot.com'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
